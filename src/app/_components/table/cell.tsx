interface ITableCell {
  children: JSX.Element | JSX.Element[] | (string | JSX.Element)[] | string;
  wrap?: boolean;
  tight?: boolean;
}

export function TableCell({ children, wrap = false, tight = false }: ITableCell) {
  let className = wrap ? 'p-3' : 'p-3 whitespace-nowrap';
  if (tight) className += ' leading-none';
  return <td className={className}>{children}</td>;
}
