interface ConfirmationIconProps {
  classString: string;
}

export function ConfirmationIcon({ classString }: ConfirmationIconProps) {
  return (
    <svg
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='#48bf75'
      className={classString}
      style={{ opacity: 1 }}
      aria-label='Copied to clipboard'
      aria-live='assertive'
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
    </svg>
  );
}
