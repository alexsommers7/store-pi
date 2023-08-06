'use client';

import { OnThisPageLink } from '@/docs/on-this-page/link';
import { useCurrentlyViewing } from '@/_hooks/useCurrentlyViewing';

export function OnThisPage() {
  const { currentlyViewing } = useCurrentlyViewing();
  const { currentSubitem } = currentlyViewing;

  return (
    <>
      <aside className='hidden min-[1151px]:flex flex-col w-[280px] sticky top-[70px] p-6 overflow-y-auto h-full scrollbar-thin max-h-minus-nav text-left'>
        {currentSubitem?.anchors.length ? (
          <>
            <h3 className='font-bold tracki uppercase text-white pb-3'>On this page</h3>

            <ul className='flex flex-col space-y-2'>
              {currentSubitem?.anchors.map(({ label, hash }) => (
                <li key={hash}>
                  <OnThisPageLink name={label} href={`#${hash}`} />
                </li>
              ))}

              {currentSubitem.isDBTable ? (
                <li>
                  <OnThisPageLink name='Property Reference' href='#property-reference' />
                </li>
              ) : null}
            </ul>
          </>
        ) : null}
      </aside>
    </>
  );
}
