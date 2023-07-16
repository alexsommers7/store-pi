import { HTTPMethods } from '@/_lib/constants';

interface HttpBadgeProps {
  httpMethod?: keyof typeof HTTPMethods;
}

export function HttpBadge({ httpMethod }: HttpBadgeProps) {
  let colorClass = 'text-inherit';
  switch (httpMethod) {
    case 'GET':
      colorClass = 'text-green-500';
      break;
    case 'POST':
      colorClass = 'text-yellow-500';
      break;
    case 'PATCH':
      colorClass = 'text-stone-500';
      break;
    case 'DELETE':
      colorClass = 'text-red-500';
      break;
  }

  return (
    <span className={`mr-2 translate-y-[2px] text-md ${colorClass}`}>
      <strong>{httpMethod}</strong>
    </span>
  );
}
