'use client';

import { OnThisPageLink } from '@/docs/onThisPage/link';
import { useCurrentlyViewing } from '@/_hooks/useCurrentlyViewing';

export function OnThisPage() {
  const { currentlyViewing } = useCurrentlyViewing();
  const { currentSubitem } = currentlyViewing;

  return (
    <>
      {currentSubitem?.anchors.length ? (
        <aside className='hidden xl:flex flex-col w-[200px] sticky top-[70px] p-6 overflow-y-auto h-full scrollbar-thin max-h-minus-nav'>
          <h3 className='font-bold tracki uppercase text-white pb-3'>On this page</h3>

          <ul className='flex flex-col space-y-1'>
            {currentSubitem?.anchors.map(({ label, hash }) => (
              <li key={hash}>
                <OnThisPageLink name={label} href={`#${hash}`} />
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </>
  );
}
