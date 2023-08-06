import { StructureSubItem, EndpointAnchor } from '@/_lib/types';
import { EndpointIntro } from '@/docs/_components/endpointIntro';
import { SampleBody } from '@/docs/_components/sampleBody';
import { SampleResponse } from '@/docs/_components/sampleResponse';
import { Note } from '@/_components/typography/note';

export function endpointMapper(structure: StructureSubItem) {
  return structure.anchors.map((anchor) => {
    const { hash, label, httpMethod, slug, body, response, requiresAuth, desc, note } =
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

        {note && <Note noteText={note} />}

        {body && <SampleBody code={body} />}

        {response && <SampleResponse code={response} />}

        {(httpMethod === 'DELETE' || (slug === 'logout' && !response)) && (
          <p className='mt-4'>
            Returns <span className='snippet'>204 No Content</span>
          </p>
        )}
      </article>
    );
  });
}
