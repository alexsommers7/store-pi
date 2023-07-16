import { AnchorHeading } from '@/_components/typography/anchorHeading';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';
import { apiOrigin, HTTPMethods } from '@/_lib/constants';

interface EndpointIntroProps {
  anchorId: string;
  label: string;
  httpMethod: keyof typeof HTTPMethods;
  slug: string;
  isDelete?: boolean;
}

export function EndpointIntro({
  anchorId,
  label,
  httpMethod,
  slug,
  isDelete = false,
}: EndpointIntroProps) {
  return (
    <>
      <div>
        <AnchorHeading anchorId={anchorId} httpMethod={httpMethod}>
          <SectionSubHeading>{label}</SectionSubHeading>
        </AnchorHeading>

        <p className='snippet mt-1'>
          {apiOrigin}/{slug}
        </p>
      </div>

      {isDelete && (
        <p>
          Returns <span className='snippet'>204 No Content</span>
        </p>
      )}
    </>
  );
}
