import { DocsProvider } from '@/docs/_context/index';
import { DocsSidebar } from '@/docs/sidebar/index';
import { OnThisPage } from '@/docs/on-this-page/index';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <DocsProvider>
      <div className='relative flex max-[1151px]:flex-wrap min-[1151px]:text-justify max-w-[90rem] mx-auto'>
        <DocsSidebar />
        {children}
        <OnThisPage />
      </div>
    </DocsProvider>
  );
}
