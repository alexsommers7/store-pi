import { TextLink } from '../navigation/textLink';

export function Footer() {
  return (
    <footer className='relative z-40 flex flex-col items-center justify-between px-8 py-5 border-t-2 border-t-stone-900'>
      <p className='p-3'>
        Created by <TextLink href='https://alexsommers.com' label='Alex Sommers' />
      </p>
    </footer>
  );
}
