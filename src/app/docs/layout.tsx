import { DocsProvider } from '@/docs/_context/index';
import { DocsSidebar } from '@/docs/sidebar/index';
import { OnThisPage } from '@/docs/onThisPage/index';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DocsProvider>
      <main className='relative flex flex-wrap min-[1151px]:text-justify max-w-[90rem] mx-auto'>
        <DocsSidebar />
        {children}
        <OnThisPage />
      </main>
    </DocsProvider>
  );
}
