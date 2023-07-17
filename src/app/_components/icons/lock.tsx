interface LockProps {
  classString?: string;
}

export function Lock({
  classString = 'w-[16px] h-[16px] inline-block stroke-2 stroke-indigo-400 translate-y-[-3px]',
}: LockProps) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={classString}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
      />
    </svg>
  );
}
