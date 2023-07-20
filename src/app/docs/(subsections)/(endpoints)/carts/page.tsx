import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Carts() {
  const cartStructure = getSlugStructure('carts');

  if (!cartStructure) return null;

  return (
    <>
      <SectionHeading>Carts</SectionHeading>

      <p>
        Each user has a cart associated with them. The cart object will contain a products array,
        the cart total (string and numeric), and more. A cart must belong to a user, with some users
        having empty carts.
      </p>

      {endpointMapper(cartStructure)}
    </>
  );
}
