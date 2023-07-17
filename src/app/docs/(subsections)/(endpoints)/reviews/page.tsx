import { SectionHeading } from '@/_components/typography/sectionHeading';
import { EndpointIntro } from '@/docs/_components/endpointIntro';
import { SampleBody } from '@/docs/_components/sampleBody';
import { SampleResponse } from '@/docs/_components/sampleResponse';
import { createOrUpdateReviewBody } from '@/_lib/api-samples/sampleBodies';
import {
  getAllReviewsResponse,
  getReviewResponse,
  getProductReviewsResponse,
  getCurrentUserReviewsResponse,
  createOrUpdateReviewResponse,
} from '@/_lib/api-samples/sampleResponses';

export default function Reviews() {
  return (
    <>
      <SectionHeading>Reviews</SectionHeading>

      <p>
        Every review is associated with a user. Not every user has left a review, and some users
        have created multiple reviews. The review object contains properties such as rating,
        incentivization, verification, and more.
      </p>
      <p>
        In order to modify or delete an existing review, you must be authenticated as the author of
        the review.
      </p>

      <EndpointIntro
        anchorId='get-reviews'
        label='Get All Reviews'
        httpMethod='GET'
        slug='reviews'
      />
      <SampleResponse code={getAllReviewsResponse} />

      <EndpointIntro anchorId='get-review' label='Get Review' httpMethod='GET' slug='reviews/:id' />
      <SampleResponse code={getReviewResponse} />

      <EndpointIntro
        anchorId='get-product-reviews'
        label={`Get Product's Reviews`}
        httpMethod='GET'
        slug='products/:id/reviews'
      />
      <SampleResponse code={getProductReviewsResponse} />

      <EndpointIntro
        anchorId='get-current-user-reviews'
        label='Get Current User Reviews'
        httpMethod='GET'
        slug='users/current/reviews'
        requiresAuth
      />
      <SampleResponse code={getCurrentUserReviewsResponse} />

      <EndpointIntro
        anchorId='create-review'
        label='Create New Review'
        httpMethod='POST'
        slug='products/:id/reviews'
        requiresAuth
      />
      <SampleBody code={createOrUpdateReviewBody} />
      <SampleResponse code={createOrUpdateReviewResponse} />

      <EndpointIntro
        anchorId='update-review'
        label='Update Review'
        httpMethod='POST'
        slug='reviews/:id'
        requiresAuth
      />
      <SampleBody code={createOrUpdateReviewBody} />
      <SampleResponse code={createOrUpdateReviewResponse} />

      <EndpointIntro
        anchorId='delete-review'
        label='Delete Review'
        httpMethod='DELETE'
        slug='reviews/:id'
        requiresAuth
        isDelete
      />
    </>
  );
}
