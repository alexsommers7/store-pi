interface NoteProps {
  noteText: string | JSX.Element | JSX.Element[];
  largeMargin?: boolean;
  showNote?: boolean;
}

export function Note({ noteText, largeMargin = true, showNote = true }: NoteProps) {
  const margin = largeMargin ? 'mt-8' : 'mt-2';

  return (
    <p
      className={`p-4 ${margin} max-w-full rounded-sm bg-indigo-400/10 border-l-2 border-indigo-300 w-max`}
    >
      {showNote && <strong className='text-indigo-300'>NOTE: </strong>}
      {noteText}
    </p>
  );
}
