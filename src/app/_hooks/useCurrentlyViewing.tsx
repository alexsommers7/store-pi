import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useDocsProvider } from '@/docs/_context';
import { structure, StructureSubItem } from '@/docs/structure';
import { useSlugPagination, PaginationSlug } from '@/docs/pagination/useSlugPagination';

interface CurrentlyViewingState {
  currentSubitem: StructureSubItem | null;
  prevSlug: PaginationSlug | null;
  nextSlug: PaginationSlug | null;
  currentAnchorLabel: string | null;
}

const defaultState: CurrentlyViewingState = {
  currentSubitem: null,
  prevSlug: null,
  nextSlug: null,
  currentAnchorLabel: null,
};

export function useCurrentlyViewing() {
  const [currentlyViewing, setCurrentlyViewing] = useState<CurrentlyViewingState>(defaultState);
  const { activeAnchor } = useDocsProvider();

  const pathname = usePathname(); // e.g. /docs/introduction
  const splitPath = pathname.split('/'); // e.g. ['docs', 'introduction']
  const currentSlug = splitPath[splitPath.length - 1]; // e.g. 'introduction'
  const { nextSlug, prevSlug } = useSlugPagination(currentSlug);

  const currentSection = structure.find((item) => {
    const allSlugs = item.subitems.map((subitem) => subitem.slug);
    return allSlugs.includes(currentSlug);
  });

  const subitems = (currentSection?.subitems as StructureSubItem[]) || [];
  const currentSubitem = subitems.find((subitem) => subitem.slug === currentSlug) || null;

  const currentAnchors = currentSubitem?.anchors;
  const currentAnchorLabel =
    currentAnchors?.find((anchor) => anchor.hash === activeAnchor)?.label || '';

  useEffect(() => {
    setCurrentlyViewing({
      currentSubitem,
      prevSlug,
      nextSlug,
      currentAnchorLabel,
    });
  }, [activeAnchor, currentSubitem, prevSlug, nextSlug, currentAnchorLabel]);

  return { currentlyViewing };
}
