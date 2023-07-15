import { useState, useEffect } from 'react';
import { structure } from '@/docs/structure';

export interface PaginationSlug {
  label: string;
  slug: string;
}

interface PaginationSlugs {
  nextSlug: PaginationSlug | null;
  prevSlug: PaginationSlug | null;
}

export function useSlugPagination(slug: string): PaginationSlugs {
  const [nextSlug, setNextSlug] = useState<PaginationSlug | null>(null);
  const [prevSlug, setPrevSlug] = useState<PaginationSlug | null>(null);

  useEffect(() => {
    let i = 0;
    for (const item of structure) {
      const { subitems } = item;
      const currentIndex = subitems.findIndex((subitem) => subitem.slug === slug);

      if (currentIndex !== -1) {
        // item was found in current subitems

        if (currentIndex < subitems.length - 1) {
          // not at end of current subitems
          setNextSlug(subitems[currentIndex + 1]);
        } else {
          // at end of current subitems
          setNextSlug(structure[i + 1] ? structure[i + 1].subitems[0] : null);
        }

        if (currentIndex > 0) {
          // not at start of current subitems
          setPrevSlug(subitems[currentIndex - 1]);
        } else {
          // at start of current subitems
          setPrevSlug(
            i > 0 ? structure[i - 1].subitems[structure[i - 1].subitems.length - 1] : null
          );
        }

        break;
      }

      i += 1;
    }
  }, [slug]);

  return { nextSlug, prevSlug };
}
