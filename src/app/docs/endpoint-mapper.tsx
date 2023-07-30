import { StructureSubItem, EndpointAnchor } from '@/docs/structure';
import { EndpointIntro } from '@/docs/_components/endpointIntro';
import { SampleBody } from '@/docs/_components/sampleBody';
import { SampleResponse } from '@/docs/_components/sampleResponse';
import { Tip } from '@/_components/typography/tip';

export function endpointMapper(structure: StructureSubItem) {
  return structure.anchors.map((anchor) => {
    const { hash, label, httpMethod, slug, body, response, requiresAuth, desc, tip } =
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

        {desc && <p className={`${tip ? 'mb-5' : 'mb-10'}`}>{desc}</p>}

        {tip && (
          <div className='mb-10'>
            <Tip tipText={tip} />
          </div>
        )}

        {body && <SampleBody code={body} />}

        {response && <SampleResponse code={response} />}

        {(httpMethod === 'DELETE' || slug === 'logout') && (
          <p className='mt-5'>
            Returns <span className='snippet'>204 No Content</span>
          </p>
        )}
      </article>
    );
  });
}
