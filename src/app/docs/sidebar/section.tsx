import { NavLink } from '@/_components/navigation/navLink';
import { StructureSubItem } from '@/docs/structure';

export interface SidebarSectionProps {
  section: {
    label: string;
    subitems: StructureSubItem[];
  };
}

export function SidebarSection({ section }: SidebarSectionProps) {
  return (
    <div className='space-y-2'>
      <h2 className='font-bold tracki uppercase text-white'>{section.label}</h2>
      <ul className='flex flex-col space-y-1'>
        {section.subitems.map((subitem) => (
          <li key={subitem.slug}>
            <NavLink
              name={subitem.label}
              href={`/docs/${subitem.slug}`}
              bold={false}
              addSidebarAccent
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
