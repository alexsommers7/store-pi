'use client';

import { useState, useRef, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import { Lock } from '@/_components/icons/lock';
import { ConfirmationIcon } from '@/_components/icons/confirmation';
import { HTTPMethods } from '@/_lib/constants';
import { CopyIcon } from '../icons/copy';
import { useDocsProvider } from '@/docs/_context/index';
import { HttpBadge } from '@/_components/typography/httpBadge';

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
  const [showConfirmation, setShowConfirmation] = useState(false);
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
    if (showConfirmation) return;

    anchorRef.current?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${anchorId}`);

    navigator.clipboard.writeText(window.location.href);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <div className='group relative flex items-center w-max max-w-[90%] mt-8 mb-3'>
      {httpMethod && <HttpBadge httpMethod={httpMethod} />}

      <Link
        href={`#${anchorId}`}
        className='flex items-center scroll-my-[80px] text-center'
        aria-label='Copy skip link'
        title={showConfirmation ? 'Copied to clipboard' : 'Copy skip link'}
        onClick={onClickAnchor}
        id={anchorId}
        ref={anchorRef}
      >
        {showConfirmation ? (
          <ConfirmationIcon classString='w-5 h-5 transition-opacity m-auto duration-300 opacity-0 absolute top-[50%] translate-y-[-50%] left-[-1.75rem]' />
        ) : (
          <CopyIcon classString='w-4 h-4 hover:stroke-stone-400 stroke-stone-500 transition-all duration-300 absolute top-[50%] translate-y-[-50%] left-[-1.5rem] opacity-0 group-hover:opacity-100' />
        )}

        <div className='flex items-baseline'>
          {children}
          {requiresAuth && <Lock />}
        </div>
      </Link>
    </div>
  );
}
