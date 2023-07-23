interface ITableCell {
  children: JSX.Element | JSX.Element[] | (string | JSX.Element)[] | string;
  wrap?: boolean;
}

export function TableCell({ children, wrap = false }: ITableCell) {
  const className = wrap ? 'p-3' : 'p-3 whitespace-nowrap';
  return <td className={className}>{children}</td>;
}
