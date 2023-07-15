interface SectionSubHeadingProps {
  children: JSX.Element | string;
}

export function SectionSubHeading({ children }: SectionSubHeadingProps) {
  return (
    <h2 className='text-2xl text-white'>
      <strong>{children}</strong>
    </h2>
  );
}
