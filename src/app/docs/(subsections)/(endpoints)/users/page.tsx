import { SectionHeading } from '@/_components/typography/sectionHeading';
import { getSlugStructure } from '@/docs/structure';
import { endpointMapper } from '@/docs/endpointMapper';

export default function Users() {
  const userStructure = getSlugStructure('users');

  if (!userStructure) return null;

  return (
    <>
      <SectionHeading>Users</SectionHeading>

      <p>
        Each user object will contain general profile information, including a link to a stock photo
        hosted on S3.
      </p>

      {endpointMapper(userStructure)}
    </>
  );
}
