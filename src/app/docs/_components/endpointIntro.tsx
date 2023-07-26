import { AnchorHeading } from '@/_components/typography/anchorHeading';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';
import { UrlWithCopy } from '@/_components/typography/copyableLink';
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

        <UrlWithCopy textToCopy={`${apiOrigin}/${slug}`}>
          {apiOrigin}/{slug}
        </UrlWithCopy>
      </div>
    </>
  );
}
