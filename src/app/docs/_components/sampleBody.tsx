import { Code } from '@/_components/typography/code';

export function SampleBody({ code }: { code: string }) {
  return (
    <div>
      <p className='mb-1'>Sample Request Body:</p>
      <Code code={code} />
    </div>
  );
}
