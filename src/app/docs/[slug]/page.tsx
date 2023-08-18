import { getSlugStructure } from '@/docs/structure';
import { SectionHeading } from '@/_components/typography/sectionHeading';
import { AnchorHeading } from '@/_components/typography/anchorHeading';
import { endpointList } from '@/docs/[slug]/endpoint-list';
import { DocsPagination } from '@/docs/pagination/index';
import { AvailableFields } from '@/docs/_components/availableFields';
import { getAllSubitems } from '@/docs/structure';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';

export async function generateStaticParams() {
  const subitems = getAllSubitems();
  return subitems.map(({ slug }) => slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  const sectionStructure = getSlugStructure(params.slug);
  if (!sectionStructure) return null;

  const { label } = sectionStructure;

  return (
    <main className='max-w-full grow min-h-[89vh] min-[1151px]:max-w-[58rem] min-[1151px]:border-l-2 border-l-stone-900 xl:border-r-2 xl:border-r-stone-900'>
      <section className='flex flex-col gap-y-6 py-4 px-6 min-[1151px]:p-10'>
        <SectionHeading>{label}</SectionHeading>

        {endpointList(sectionStructure)}

        {sectionStructure.isDBTable && (
          <>
            <AnchorHeading anchorId='property-reference'>
              <SectionSubHeading>Property Reference</SectionSubHeading>
            </AnchorHeading>
            <AvailableFields tableName={label} />
          </>
        )}
      </section>

      <DocsPagination />
    </main>
  );
}
