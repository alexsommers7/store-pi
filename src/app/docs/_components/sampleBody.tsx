import { Code } from '@/_components/typography/code';

export function SampleBody({ code }: { code: string }) {
  return (
    <div>
      <p className='mb-1'>Sample Request Body:</p>
      <div className='mb-8'>
        <Code code={code} />
      </div>
    </div>
  );
}
