import { Code } from '@/_components/typography/code';

export function SampleResponse({ code }: { code: string }) {
  return (
    <div>
      <p className='mt-6 mb-1'>Sample Response:</p>
      <Code code={code} />
    </div>
  );
}
