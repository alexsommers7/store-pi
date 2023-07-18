import { StructureSubItem, SubItemAnchor } from '@/docs/structure';
import { EndpointIntro } from '@/docs/_components/endpointIntro';
import { SampleBody } from '@/docs/_components/sampleBody';
import { SampleResponse } from '@/docs/_components/sampleResponse';

export function endpointMapper(structure: StructureSubItem) {
  return structure.anchors.map((anchor) => {
    const { hash, label, httpMethod, slug, body, response } = anchor as SubItemAnchor;

    return (
      <article key={slug}>
        <EndpointIntro
          anchorId={hash}
          label={label}
          httpMethod={httpMethod}
          slug={slug}
          isDelete={httpMethod === 'DELETE'}
        />

        {body && <SampleBody code={body} />}

        {response && <SampleResponse code={response} />}
      </article>
    );
  });
}
