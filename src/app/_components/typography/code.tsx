'use client';

import { useState, useEffect } from 'react';
import { ConfirmationIcon } from '@/_components/icons/confirmation';
import Prism from 'prismjs';

interface SectionHeadingProps {
  code: string;
}

export function Code({ code }: SectionHeadingProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const onCopyCode = () => {
    if (showConfirmation) return;
    navigator.clipboard.writeText(code);

    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <pre className='relative language-javascript p-3 bg-indigo-400/10 max-h-[400px] overflow-y-auto scrollbar-thin'>
      <button
        type='button'
        className='absolute top-3 right-4'
        title={showConfirmation ? 'Copied to clipboard' : 'Copy to clipboard'}
        onClick={onCopyCode}
      >
        {showConfirmation ? (
          <div className='text-center'>
            <ConfirmationIcon classString='w-6 h-6 transition-opacity m-auto duration-300 opacity-0' />
          </div>
        ) : (
          <svg
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 hover:stroke-stone-400 stroke-stone-500 transition-fill duration-300'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z'
            />
          </svg>
        )}
      </button>

      <code>{code}</code>
    </pre>
  );
}
