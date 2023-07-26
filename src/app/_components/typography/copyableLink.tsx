import { CopyButton } from '@/_components/buttons/copy';

export function UrlWithCopy({
  children,
  textToCopy,
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
  textToCopy: string;
}) {
  return (
    <div className='group relative flex items-center'>
      <div className='absolute -left-5 top-2/4 -translate-y-2/4'>
        <CopyButton textToCopy={textToCopy} />
      </div>

      <p className='snippet mt-1 max-w-full scollbar-thin overflow-x-auto'>{children}</p>
    </div>
  );
}
