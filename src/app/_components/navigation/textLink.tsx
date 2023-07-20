import Link from 'next/link';

interface ITextLink {
  href: string;
  label: string;
  newTab?: boolean;
}

export function TextLink({ href, label, newTab }: ITextLink) {
  return (
    <Link
      href={href}
      className='underline transition-colors hover:text-indigo-300 text-indigo-400'
      target={newTab ? '_blank' : '_self'}
    >
      {label}
    </Link>
  );
}
