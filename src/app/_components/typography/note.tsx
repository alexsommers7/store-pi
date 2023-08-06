interface NoteProps {
  noteText: string | JSX.Element | JSX.Element[];
  showNote?: boolean;
}

export function Note({ noteText, showNote = true }: NoteProps) {
  return (
    <p className='p-4 my-8 max-w-full rounded-sm bg-indigo-400/10 border-l-2 border-indigo-300 w-max'>
      {showNote && <strong className='text-indigo-300'>NOTE: </strong>}
      {noteText}
    </p>
  );
}
