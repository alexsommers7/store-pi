'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface INavLink {
  name: string;
  href: string;
  bold?: boolean;
  addSidebarAccent?: boolean;
  forceActive?: boolean;
  target?: string;
}

export function NavLink({
  name,
  href,
  bold = true,
  addSidebarAccent = false,
  forceActive = false,
  target,
}: INavLink) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  let inactiveClasses = 'relative transition-colors hover:text-indigo-300';
  if (forceActive) inactiveClasses += ' text-indigo-400';

  const activeClasses = addSidebarAccent
    ? 'relative transition-colors hover:text-indigo-300 text-indigo-400 before:left-[-10px] before:top-[50%] before:translate-y-[-50%] before:h-[90%] before:bg-indigo-400 before:absolute before:bg-blue before:content [""] before:w-[2px]'
    : 'relative transition-colors hover:text-indigo-300 text-indigo-400';

  return (
    <>
      <Link
        className={isActive ? activeClasses : inactiveClasses}
        href={href}
        target={target || '_self'}
      >
        {bold ? <strong>{name}</strong> : <span>{name}</span>}
      </Link>
    </>
  );
}
