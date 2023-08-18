import Link from 'next/link';
import { ArrowLongRightIcon } from '@/_components/icons/arrowLongRight';
import { StructureSubItem } from '@/_lib/types';

interface DirectoryListProps {
  subitems: StructureSubItem[];
}

export function DirectoryList({ subitems }: DirectoryListProps) {
  return subitems.map(({ slug, label, desc }) => (
    <Link href={`/docs/${slug}`} key={slug} className='group basis-[400px]'>
      <article className='p-6 bg-indigo-400/10 h-full rounded-sm transition duration-200 group-hover:bg-indigo-300/10'>
        <div className='flex items-center'>
          <h2 className='text-2xl font-bold mr-auto'>{label}</h2>
          <span className='transition duration-200 group-hover:translate-x-1'>
            <ArrowLongRightIcon />
          </span>
        </div>

        {desc && <p className='mt-2 text-lg leading-tight text-left'>{desc}</p>}
      </article>
    </Link>
  ));
}
