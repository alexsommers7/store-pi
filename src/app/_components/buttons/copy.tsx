'use client';

import { CopyIcon } from '@/_components/icons/copy';
import { ConfirmationIcon } from '@/_components/icons/confirmation';
import { useCopy } from '@/_hooks/useCopy';

export function CopyButton({
  textToCopy,
  isLarge = false,
}: {
  textToCopy: string;
  isLarge?: boolean;
}) {
  const { showConfirmation, onCopyCode } = useCopy(textToCopy);

  let copyClassString = 'hover:stroke-stone-400 stroke-stone-500 transition-fill duration-300';
  copyClassString += isLarge ? ' w-6 h-6' : ' w-4 h-4';

  let confirmationClassString = 'transition-opacity m-auto duration-300 opacity-0';
  confirmationClassString += isLarge ? ' w-6 h-6' : ' w-4 h-4';

  return (
    <button
      type='button'
      className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'
      title={showConfirmation ? 'Copied to clipboard' : 'Copy to clipboard'}
      onClick={onCopyCode}
    >
      {showConfirmation ? (
        <ConfirmationIcon classString={confirmationClassString} />
      ) : (
        <CopyIcon classString={copyClassString} />
      )}
    </button>
  );
}
