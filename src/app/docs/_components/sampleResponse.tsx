import { Code } from '@/_components/typography/code';

export function SampleResponse({ code }: { code: string }) {
  return (
    <div>
      <p className='mb-1'>Sample Response:</p>
      <Code code={code} />
    </div>
  );
}
