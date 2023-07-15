import { useRef } from 'react';
import Link from 'next/link';
import { useDocsProvider } from '@/docs/_context/index';

export interface IOnThisPageLink {
  name: string;
  href: string;
}

export function OnThisPageLink({ name, href }: IOnThisPageLink) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { activeAnchor } = useDocsProvider();

  const isActive = activeAnchor === href.split('#')[1];

  const classes = isActive
    ? 'relative transition-colors hover:text-indigo-300 text-indigo-400'
    : 'relative transition-colors hover:text-indigo-300';

  return (
    <Link href={href} className={classes} ref={anchorRef}>
      {name}
    </Link>
  );
}
