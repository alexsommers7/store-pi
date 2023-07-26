import { RollerLoader } from './_components/loaders/roller';

export default function Loading() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-2xl font-bold text-center'>
        <RollerLoader />
      </h1>
    </main>
  );
}
