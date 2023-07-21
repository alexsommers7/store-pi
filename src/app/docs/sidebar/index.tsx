'use client';

import { useState, useEffect } from 'react';
import { SidebarSection } from '@/docs/sidebar/section';
import { structure } from '@/docs/structure';
import { HamburgerIcon } from '@/_components/icons/hamburger';
import { CloseIcon } from '@/_components/icons/close';
import { useCurrentlyViewing } from '@/_hooks/useCurrentlyViewing';
import { usePathname } from 'next/navigation';

const commonClasses =
  'fixed min-[1151px]:sticky w-full min-[600px]:w-[280px] top-[70px] left-0 p-6 overflow-y-auto h-full scrollbar-thin max-h-minus-nav ease-in-out duration-200 will-change-transform z-30';
const openClasses = 'visible translate-x-0 bg-zinc-900';
const closedClasses =
  'invisible min-[1151px]:visible translate-x-[-110vw] min-[1151px]:translate-x-0';

export function DocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentlyViewing } = useCurrentlyViewing();
  const { currentSubitem, currentAnchorLabel } = currentlyViewing;
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState(pathname);

  const sidebarClasses = `${commonClasses} ${isOpen ? openClasses : closedClasses}`;

  // prevent body scrolling when sidebar is open
  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [isOpen]);

  // close sidebar on route change
  useEffect(() => {
    prevPath && prevPath !== pathname && setIsOpen(false);
    setPrevPath(pathname);
  }, [pathname, prevPath]);

  return (
    <>
      <div className='px-6 py-2 pb-0 border-b-2 border-b-stone-900 bg-gradient z-30 w-full block min-[1151px]:hidden sticky top-[70px]'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label='open side navigation'
          className='flex items-center pb-2'
        >
          <HamburgerIcon />
          {currentSubitem && currentAnchorLabel && (
            <span className='ml-2 text-white text-sm text-left'>
              {currentSubitem.label} {'>'} {currentAnchorLabel}
            </span>
          )}
        </button>
      </div>

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
