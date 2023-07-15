import { DocsSidebar } from '@/docs/sidebar/index';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative flex flex-wrap min-[1151px]:text-justify'>
      <DocsSidebar />
      {children}
    </main>
  );
}
