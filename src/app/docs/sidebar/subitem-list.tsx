import { ExternalIcon } from '@/_components/icons/external';
import { NavLink } from '@/_components/navigation/navLink';
import { StructureSubItem } from '@/_lib/types';

interface SubitemListProps {
  subitems: StructureSubItem[];
}

export function SubitemList({ subitems }: SubitemListProps) {
  return subitems.map(({ slug, label }) => {
    const isExternal = slug.startsWith('https');

    return (
      <li key={slug} className='flex items-center'>
        <NavLink
          name={label}
          href={isExternal || slug.startsWith('http') ? slug : `/docs/${slug}`}
          target={isExternal ? '_blank' : '_self'}
          bold={false}
          addSidebarAccent
        />

        {isExternal && (
          <span className='ml-1'>
            <ExternalIcon />
          </span>
        )}
      </li>
    );
  });
}
