'use client';

import { useState } from 'react';
import { SidebarSection } from '@/docs/sidebar/section';
import { structure } from '@/docs/structure';
import { CloseIcon } from '@/_components/icons/close';

const commonClasses =
  'fixed min-[1151px]:relative top-[70px] min-[1151px]:top-0 left-0 w-full min-[1151px]:w-[240px] p-6 overflow-y-auto h-full scrollbar-thin max-h-minus-nav ease-in-out duration-200 will-change-transform z-30';
const openClasses = 'visible translate-x-0 bg-indigo-500';
const closedClasses =
  'invisible min-[1151px]:visible translate-x-[-110vw] min-[1151px]:translate-x-0';

export function DocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarClasses = `${commonClasses} ${isOpen ? openClasses : closedClasses}`;

  return (
    <>
      <aside className={sidebarClasses}>
        <nav className='space-y-8'>
          {structure.map((section) => (
            <SidebarSection section={section} key={section.label} />
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-6 right-6 ${isOpen ? 'opacity-1' : 'opacity-0'}`}
          aria-label='close side navigation'
        >
          <CloseIcon />
        </button>
      </aside>
    </>
  );
}
