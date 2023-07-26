export function GenericTable({
  children,
  shrink = false,
  fade = false,
}: {
  children: JSX.Element | JSX.Element[] | string | null;
  shrink?: boolean;
  fade?: boolean;
}) {
  return (
    <div className={`overflow-x-auto scrollbar-thin ${fade ? 'opacity-0 animate-fadeIn' : ''}`}>
      <table className={`table-auto text-left w-full ${shrink ? '' : 'min-w-[814px]'}`}>
        {children}
      </table>
    </div>
  );
}
