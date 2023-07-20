import { SectionHeading } from '@/_components/typography/sectionHeading';
import { TextLink } from '@/_components/navigation/textLink';
import { apiOrigin } from '@/_lib/constants';

export default function Introduction() {
  return (
    <>
      <SectionHeading>Quick Start</SectionHeading>

      <p>
        Get a list of 10 products:{' '}
        <TextLink
          href={`${apiOrigin}/products?limit=10`}
          label={`${apiOrigin}/products?limit=10`}
          newTab
        />
      </p>

      <p className='text-left'>
        Get products within a category:{' '}
        <TextLink
          href={`${apiOrigin}/categories/6213d49cb7f67e0d64774e93/products`}
          label={`${apiOrigin}/categories/6213d49cb7f67e0d64774e93/products`}
          newTab
        />
      </p>

      <p className='text-left'>
        Get a specific product&apos;s reviews{' '}
        <TextLink
          href={`${apiOrigin}/products/6213d55cf8b9765ec0fbbcaa/reviews`}
          label={`${apiOrigin}/products/6213d55cf8b9765ec0fbbcaa/reviews`}
          newTab
        />
      </p>
    </>
  );
}
