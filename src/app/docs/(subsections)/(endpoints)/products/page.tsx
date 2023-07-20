import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Products() {
  const productStructure = getSlugStructure('products');

  if (!productStructure) return null;

  return (
    <>
      <SectionHeading>Products</SectionHeading>

      <p>
        A total of 50 products exist in the database. Each product belongs to a category and its
        object contains properties such as pricing, review data, specs, and more.
      </p>

      {endpointMapper(productStructure)}
    </>
  );
}
