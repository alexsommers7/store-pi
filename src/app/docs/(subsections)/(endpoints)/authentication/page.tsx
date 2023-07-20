import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';
import { TextLink } from '@/_components/navigation/textLink';

export default function Users() {
  const authStructure = getSlugStructure('authentication');

  if (!authStructure) return null;

  return (
    <>
      <SectionHeading>Authentication</SectionHeading>

      <p>
        See the <TextLink href='/docs/introduction#authorization' label='authorization' /> section
        for more information on what happens upon authenticating.
      </p>

      {endpointMapper(authStructure)}
    </>
  );
}
