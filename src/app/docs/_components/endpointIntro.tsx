import { AnchorHeading } from '@/_components/typography/anchorHeading';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';
import { apiOrigin, HTTPMethods } from '@/_lib/constants';

interface EndpointIntroProps {
  anchorId: string;
  label: string;
  httpMethod: keyof typeof HTTPMethods;
  slug: string;
  requiresAuth?: boolean;
}

export function EndpointIntro({
  anchorId,
  label,
  httpMethod,
  slug,
  requiresAuth = false,
}: EndpointIntroProps) {
  return (
    <>
      <div className='mb-6'>
        <AnchorHeading anchorId={anchorId} httpMethod={httpMethod} requiresAuth={requiresAuth}>
          <SectionSubHeading>{label}</SectionSubHeading>
        </AnchorHeading>

        <p className='snippet mt-1 max-w-full scollbar-thin overflow-x-auto'>
          {apiOrigin}/{slug}
        </p>
      </div>
    </>
  );
}
