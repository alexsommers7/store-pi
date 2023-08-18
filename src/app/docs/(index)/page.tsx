import { getAllSubitems } from '@/docs/structure';
import { DirectoryList } from '@/docs/(index)/directory-list';
import { SectionHeading } from '@/_components/typography/sectionHeading';

export default function Docs() {
  const subitems = getAllSubitems();
  const subitemsInternal = subitems.filter((item) => !item.slug.startsWith('https'));

  return (
    <div className='w-full max-w-[58rem] border-l-2 border-l-stone-900 p-10'>
      <SectionHeading>Documentation</SectionHeading>

      <div className='flex flex-wrap justify-between gap-x-2 gap-y-8 my-12'>
        <DirectoryList subitems={subitemsInternal} />
      </div>
    </div>
  );
}
