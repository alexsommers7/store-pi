import { StructureSubItem, EndpointAnchor } from '@/_lib/types';
import { EndpointIntro } from '@/docs/_components/endpointIntro';
import { SampleBody } from '@/docs/_components/sampleBody';
import { SampleResponse } from '@/docs/_components/sampleResponse';
import { Note } from '@/_components/typography/note';

export function endpointList(structure: StructureSubItem) {
  return structure.anchors.map((anchor) => {
    const { hash, label, httpMethod, slug, body, response, requiresAuth, note } =
      anchor as EndpointAnchor;

    return (
      <article key={hash}>
        <EndpointIntro
          anchorId={hash}
          label={label}
          httpMethod={httpMethod}
          slug={slug}
          requiresAuth={requiresAuth}
        />

        {body && <SampleBody code={body} />}

        {response && <SampleResponse code={response} />}

        {note && <Note noteText={note} />}

        {(httpMethod === 'DELETE' || (slug === 'logout' && !response)) && (
          <p className='mt-6'>
            Returns <span className='snippet'>204 No Content</span>
          </p>
        )}
      </article>
    );
  });
}
