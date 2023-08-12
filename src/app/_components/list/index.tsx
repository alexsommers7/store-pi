export function List({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <ul className='list-disc list-inside ms-4'>{children}</ul>;
}
