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
          href={`${apiOrigin}/categories/1/products`}
          label={`${apiOrigin}/categories/1/products`}
          newTab
        />
      </p>

      <p className='text-left'>
        Get products below a given price:{' '}
        <TextLink
          href={`${apiOrigin}/products?sale_price_less_than=400&fields=name,sale_price`}
          label={`${apiOrigin}/products?sale_price_less_than=400&fields=name,sale_price`}
          newTab
        />
      </p>

      <p className='text-left'>
        Get a specific product&apos;s reviews{' '}
        <TextLink
          href={`${apiOrigin}/products/18/reviews`}
          label={`${apiOrigin}/products/18/reviews`}
          newTab
        />
      </p>
    </>
  );
}
