export function TableHead({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <thead>
      <tr className='border-b-2 border-b-stone-900'>{children}</tr>
    </thead>
  );
}
