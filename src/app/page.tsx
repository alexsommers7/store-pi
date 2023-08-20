import { LinkButtonPrimary } from '@/_components/navigation/linkButtonPrimary';

export default function Home() {
  return (
    <>
      <main className='flex flex-col items-center justify-center p-8 pb-12 min-height-minus-nav-and-footer'>
        <h1 className='text-6xl font-bold text-center'>StorePI</h1>
        <p className='p-3 text-center'>
          <em>Free, Open-Source Mock Commerce API</em>
        </p>

        <div className='flex gap-2 justify-center mt-8'>
          <LinkButtonPrimary href='/docs/introduction'>Get Started</LinkButtonPrimary>
        </div>
      </main>
    </>
  );
}
