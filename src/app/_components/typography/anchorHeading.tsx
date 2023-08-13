'use client';

import { useRef, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import { Lock } from '@/_components/icons/lock';
import { HTTPMethods } from '@/_lib/constants';
import { useDocsProvider } from '@/docs/_context/index';
import { HttpBadge } from '@/docs/_components/httpBadge';

interface AnchorHeadingProps {
  anchorId: string;
  httpMethod?: keyof typeof HTTPMethods;
  requiresAuth?: boolean;
  children: JSX.Element | string;
}

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -82% 0px',
  threshold: 0,
};

export function AnchorHeading({
  anchorId,
  httpMethod,
  requiresAuth = false,
  children,
}: AnchorHeadingProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const { setActiveAnchor } = useDocsProvider();

  // avoiding a custom hook here because of a bug where anchorRef is null on initial render
  // need to be able to wrap in a useEffect to avoid this
  useEffect(() => {
    const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry && entry.isIntersecting && entry.intersectionRatio > 0) {
        setActiveAnchor(anchorId);
      }
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    if (anchorRef.current) observer.observe(anchorRef.current);

    const { current } = anchorRef;
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [setActiveAnchor, anchorId]);

  const onClickAnchor = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    anchorRef.current?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${anchorId}`);

    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className='group relative flex flex-wrap gap-[.6rem] items-center w-max max-w-[90%] mt-10 mb-4'>
      {httpMethod && <HttpBadge httpMethod={httpMethod} />}

      <Link
        href={`#${anchorId}`}
        className='flex items-center scroll-my-[80px] text-center'
        onClick={onClickAnchor}
        id={anchorId}
        ref={anchorRef}
      >
        <div className='flex items-center gap-[6px]'>
          {children}
          {requiresAuth && (
            <span className='translate-y-[4px]'>
              <Lock />
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}
