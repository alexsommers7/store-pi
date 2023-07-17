import { DocsPagination } from '@/docs/pagination/index';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-full min-[1151px]:max-w-[58rem] min-[1151px]:border-l-2 border-l-stone-900 xl:border-r-2 xl:border-r-stone-900'>
      <section className='flex flex-col gap-y-6 py-4 px-6 min-[1151px]:p-10'>{children}</section>
      <DocsPagination />
    </main>
  );
}
