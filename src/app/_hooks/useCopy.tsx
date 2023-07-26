import { useState } from 'react';

export function useCopy(textToCopy: string) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onCopyCode = () => {
    if (showConfirmation) return;
    navigator.clipboard.writeText(textToCopy);

    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 1000);
  };

  return { showConfirmation, onCopyCode };
}
