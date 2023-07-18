import { SectionHeading } from '@/_components/typography/sectionHeading';
import { StructureSubItem, structure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Categories() {
  const subitems = structure.map((item) => item.subitems).flat();
  const categoryStructure = subitems.find((item) => item.slug === 'categories') as StructureSubItem;

  if (!categoryStructure) return null;

  return (
    <>
      <SectionHeading>Categories</SectionHeading>

      <p>There are 6 different product categories available.</p>

      {endpointMapper(categoryStructure)}
    </>
  );
}
