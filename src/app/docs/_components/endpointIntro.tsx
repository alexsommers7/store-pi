import { AnchorHeading } from '@/_components/typography/anchorHeading';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';
import { TextWithCopy } from '@/_components/typography/copyableText';
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
      <div className='mb-8'>
        <AnchorHeading anchorId={anchorId} httpMethod={httpMethod} requiresAuth={requiresAuth}>
          <SectionSubHeading>{label}</SectionSubHeading>
        </AnchorHeading>

        <TextWithCopy textToCopy={`${apiOrigin}/${slug}`}>
          {apiOrigin}/{slug}
        </TextWithCopy>
      </div>
    </>
  );
}
