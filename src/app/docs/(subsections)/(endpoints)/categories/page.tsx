import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Categories() {
  const categoryStructure = getSlugStructure('categories');

  if (!categoryStructure) return null;

  return (
    <>
      <SectionHeading>Categories</SectionHeading>

      <p>There are 6 different product categories available.</p>

      {endpointMapper(categoryStructure)}
    </>
  );
}
