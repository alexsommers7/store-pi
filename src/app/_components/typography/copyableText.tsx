import { CopyButton } from '@/_components/buttons/copy';

export function TextWithCopy({
  children,
  textToCopy,
  useSnippetStyling = true,
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
  textToCopy: string;
  useSnippetStyling?: boolean;
}) {
  return (
    <div className='group relative flex items-center'>
      <div className='absolute -left-5 top-2/4 -translate-y-2/4'>
        <CopyButton textToCopy={textToCopy} />
      </div>

      <p
        className={`${
          useSnippetStyling ? 'snippet' : ''
        } mt-1 max-w-full scollbar-thin overflow-x-auto`}
      >
        {children}
      </p>
    </div>
  );
}
