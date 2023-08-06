import { NavLink } from '@/_components/navigation/navLink';
import { StructureItem } from '@/_lib/types';
import { ExternalIcon } from '@/_components/icons/external';

interface SidebarSectionProps {
  section: StructureItem;
}

export function SidebarSection({ section }: SidebarSectionProps) {
  return (
    <div className='space-y-2'>
      <h2 className='font-bold tracki uppercase text-white'>{section.label}</h2>
      <ul className='flex flex-col space-y-2'>
        {section.subitems.map(({ slug, label }) => {
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
        })}
      </ul>
    </div>
  );
}
