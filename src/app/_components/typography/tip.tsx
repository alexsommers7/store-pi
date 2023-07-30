export function Tip({ tipText }: { tipText: string | JSX.Element | JSX.Element[] }) {
  return (
    <p className='py-2 px-4 mt-0 max-w-full rounded-sm bg-indigo-400/10 border-l-2 border-indigo-300 w-max'>
      <strong className='text-indigo-300'>TIP: </strong>
      {tipText}
    </p>
  );
}
