import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Wishlists() {
  const wishlistStructure = getSlugStructure('wishlists');

  if (!wishlistStructure) return null;

  return (
    <>
      <SectionHeading>Wishlists</SectionHeading>

      <p>
        Every user is assigned a wishlist. Some will have an empty wishlist, while others will have
        products in theirs.
      </p>

      {endpointMapper(wishlistStructure)}
    </>
  );
}
