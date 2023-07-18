import { SectionHeading } from '@/_components/typography/sectionHeading';
import { StructureSubItem, structure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Reviews() {
  const subitems = structure.map((item) => item.subitems).flat();
  const reviewStructure = subitems.find((item) => item.slug === 'reviews') as StructureSubItem;

  if (!reviewStructure) return null;

  return (
    <>
      <SectionHeading>Reviews</SectionHeading>

      <p>
        Every review is associated with a user. Not every user has left a review, and some users
        have created multiple reviews. The review object contains properties such as rating,
        incentivization, verification, and more.
      </p>
      <p>
        In order to modify or delete an existing review, you must be authenticated as the author of
        the review.
      </p>

      {endpointMapper(reviewStructure)}
    </>
  );
}
