interface SectionHeadingProps {
  children: JSX.Element | string;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className='text-4xl text-indigo-400'>
      <strong>{children}</strong>
    </h1>
  );
}
