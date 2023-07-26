'use client';

import { useEffect } from 'react';
import { CopyButton } from '@/_components/buttons/copy';
import Prism from 'prismjs';

interface SectionHeadingProps {
  code: string;
}

export function Code({ code }: SectionHeadingProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='relative group'>
      <pre className='language-javascript p-3 bg-indigo-400/10 overflow-y-auto scrollbar-thin rounded-sm'>
        <div className='absolute top-3 right-4'>
          <CopyButton textToCopy={code} isLarge />
        </div>
        <code>{code}</code>
      </pre>
    </div>
  );
}
