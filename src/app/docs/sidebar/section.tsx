import { StructureItem } from '@/_lib/types';
import { SubitemList } from '@/docs/sidebar/subitem-list';

interface SidebarSectionProps {
  section: StructureItem;
}

export function SidebarSection({ section }: SidebarSectionProps) {
  return (
    <div className='space-y-2'>
      <h2 className='font-bold tracki uppercase text-white'>{section.label}</h2>
      <ul className='flex flex-col space-y-2'>
        <SubitemList subitems={section.subitems} />
      </ul>
    </div>
  );
}
