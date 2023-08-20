interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export function LinkButtonPrimary({ href, children }: LinkButtonProps) {
  return (
    <a
      className='px-5 py-2 bg-indigo-500 rounded-sm text-white transition-colors hover:bg-indigo-400'
      href={href}
    >
      {children}
    </a>
  );
}
