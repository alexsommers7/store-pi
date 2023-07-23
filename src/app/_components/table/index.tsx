export function GenericTable({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div className='overflow-x-auto scrollbar-thin'>
      <table className='table-auto text-left min-w-[814px]'>{children}</table>
    </div>
  );
}
