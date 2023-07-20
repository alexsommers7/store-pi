import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Purchases() {
  const purchaseStructure = getSlugStructure('purchases');

  if (!purchaseStructure) return null;

  return (
    <>
      <SectionHeading>Purchases</SectionHeading>

      <p>
        A total of 50 purchases exist in the database. Each purchase must belong to a user. Not
        every user has made a purchase, but some have made multiple.
      </p>

      {endpointMapper(purchaseStructure)}
    </>
  );
}
