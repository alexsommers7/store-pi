export const apiOrigin =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/v1'
    : 'https://storepi.vercel.app/api/v1';

export const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const defaultUserPhotoUrl =
  'https://storepi-media.s3.us-west-1.amazonaws.com/img/users/default.png';
