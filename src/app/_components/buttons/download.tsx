import { DownloadIcon } from '@/_components/icons/download';

export function DownloadButton({ href }: { href: string }) {
  return (
    <a
      href={href}
      className='underline transition-colors hover:text-indigo-300 text-indigo-400'
      download
    >
      <DownloadIcon />
    </a>
  );
}
