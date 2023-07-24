import { getSlugStructure } from '@/docs/structure';
import { SectionHeading } from '@/_components/typography/sectionHeading';
import { endpointMapper } from '@/docs/endpoint-mapper';
import { DocsPagination } from '@/docs/pagination/index';
import { AvailableFields } from '@/docs/_components/availableFields';

export default function Page({ params }: { params: { slug: string } }) {
  const sectionStructure = getSlugStructure(params.slug);
  if (!sectionStructure) return null;

  const { label, desc } = sectionStructure;

  return (
    <main className='max-w-full min-h-[89vh] min-[1151px]:max-w-[58rem] min-[1151px]:border-l-2 border-l-stone-900 xl:border-r-2 xl:border-r-stone-900'>
      <section className='flex flex-col gap-y-6 py-4 px-6 min-[1151px]:p-10'>
        <SectionHeading>{label}</SectionHeading>

        {desc && <p>{desc}</p>}

        <AvailableFields tableName={label} />

        {endpointMapper(sectionStructure)}
      </section>

      <DocsPagination />
    </main>
  );
}
