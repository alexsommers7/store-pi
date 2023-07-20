import Link from 'next/link';
import { getAllSubitems } from '@/docs/structure';
import { ArrowLongRightIcon } from '@/_components/icons/arrowLongRight';
import { SectionHeading } from '@/_components/typography/sectionHeading';

export default function Docs() {
  const subitems = getAllSubitems();

  return (
    <div className='w-full max-w-[58rem] border-l-2 border-l-stone-900 p-10'>
      <SectionHeading>Documentation</SectionHeading>

      <div className='flex flex-wrap justify-between gap-x-2 gap-y-8 my-12'>
        {subitems
          .filter((item) => !item.slug.startsWith('https'))
          .map(({ slug, label, desc }) => (
            <Link href={`/docs/${slug}`} key={slug} className='group basis-[400px]'>
              <article className='p-6 bg-indigo-400/10 rounded-sm transition duration-200 group-hover:bg-indigo-300/10'>
                <div className='flex items-center'>
                  <h2 className='text-2xl font-bold mr-auto'>{label}</h2>
                  <span className='transition duration-200 group-hover:translate-x-1'>
                    <ArrowLongRightIcon />
                  </span>
                </div>

                {desc && <p className='mt-2 text-lg leading-tight text-left'>{desc}</p>}
              </article>
            </Link>
          ))}
      </div>
    </div>
  );
}
