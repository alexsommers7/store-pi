'use client';

import Link from 'next/link';
import { useCurrentlyViewing } from '@/_hooks/useCurrentlyViewing';

export function DocsPagination() {
  const { currentlyViewing } = useCurrentlyViewing();
  const { prevSlug, nextSlug } = currentlyViewing;

  return (
    <div className='flex justify-between flex-wrap gap-y-6 py-10 px-4 min-[1151px]:p-10'>
      {prevSlug && !prevSlug.slug.startsWith('https') && (
        <Link
          href={`/docs/${prevSlug.slug}`}
          className='p-4 mr-auto bg-indigo-400/10 hover:bg-indigo-300/10 text-indigo-400 hover:text-indigo-300 transition-all rounded-sm'
          aria-label={`Previous: ${prevSlug.label}`}
        >
          <span className='inline-flex items-center'>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 mr-2 stroke-[3px]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
              />
            </svg>{' '}
            <strong>{prevSlug.label}</strong>
          </span>
        </Link>
      )}

      {nextSlug && !nextSlug.slug.startsWith('https') && (
        <Link
          href={`/docs/${nextSlug.slug}`}
          className='p-4 ml-auto bg-indigo-400/10 hover:bg-indigo-300/10 text-indigo-400 hover:text-indigo-300 transition-all rounded-sm'
          aria-label={`Next: ${nextSlug.label}`}
        >
          <span className='inline-flex items-center flex-wrap'>
            <strong>{nextSlug.label}</strong>

            <svg
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 ml-2 stroke-[3px]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
              />
            </svg>
          </span>
        </Link>
      )}
    </div>
  );
}
