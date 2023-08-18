import { NextResponse } from 'next/server';

// for a more user-friendly error message on RLS violations
export function apiError(error: any) {
  if (error.message && error.message.includes('row-level security')) {
    return NextResponse.json(
      { error: 'You must be logged in to perform this action.' },
      { status: 401 }
    );
  } else if (typeof error === 'string') {
    return NextResponse.json({ error }, { status: 400 });
  }

  console.log('apiError: ', error);

  return NextResponse.json({ error: error?.message || 'Something went wrong.', status: 400 });
}

export function authorizationError() {
  return NextResponse.json(
    { error: 'You must be logged in to perform this action.' },
    { status: 401 }
  );
}

export function modifiedOriginalResourceError() {
  return NextResponse.json(
    {
      message: `You attempted to modify an original resource. Your data won't be persisted, but here's a 200 response for your troubles.`,
    },
    { status: 200 }
  );
}

export function catchError(error: any) {
  console.log('catchError: ', error);

  const json = error instanceof Error ? error.message : 'An unexpected error occurred.';
  return NextResponse.json({ error: json }, { status: 500 });
}
