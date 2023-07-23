export function TableRow({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <tr className='border-b-2 border-b-stone-900'>{children}</tr>;
}
