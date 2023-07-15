import Link from 'next/link';

interface ITextLink {
  href: string;
  label: string;
}

export function TextLink({ href, label }: ITextLink) {
  return (
    <Link href={href} className='underline transition-colors hover:text-indigo-300 text-indigo-400'>
      {label}
    </Link>
  );
}
