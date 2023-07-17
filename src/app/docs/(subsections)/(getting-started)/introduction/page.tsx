import Image from 'next/image';
import { SectionHeading } from '@/_components/typography/sectionHeading';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';
import { TextLink } from '@/_components/navigation/textLink';
import { Code } from '@/_components/typography/code';
import { Lock } from '@/_components/icons/lock';
import { AnchorHeading } from '@/_components/typography/anchorHeading';
import {
  authorizedRequestHeader,
  graphqlLogin,
  graphqlQuery,
} from '@/_lib/api-samples/sampleBodies';

export default function Introduction() {
  return (
    <>
      <SectionHeading>Introduction</SectionHeading>

      <p>
        StorePI is a free, open-source REST and GraphQL API that was created for use in e-commerce
        prototyping, Front-End Developer talent evaluations, and anything else you can think of. The
        API and accompanying documentation was built with <span className='snippet'>Next.js</span>,
        <span className='snippet'>Tailwind CSS</span>, and <span className='snippet'>Vercel</span>.
      </p>

      <p>
        It provides resources such as <span className='snippet'>products</span>,{' '}
        <span className='snippet'>reviews</span>, <span className='snippet'>users</span>,{' '}
        <span className='snippet'>carts</span>, <span className='snippet'>purchases</span>, and
        more. Endpoints are provided to perform CRUD operations on each of these resources -
        supporting both end-user actions (e.g. create a new review) as well as administrative
        actions (e.g. create a new product).
      </p>

      <Image
        src='/images/storepi-demo.png'
        width={1280}
        height={720}
        className='rounded-sm'
        alt='StorePI demo'
      />

      <p>
        If you&apos;re the Postman type, you can find that version of the REST documentation{' '}
        <TextLink href='https://documenter.getpostman.com/view/12907395/UyxjF694' label='here' />.
      </p>

      <div>
        <AnchorHeading anchorId='database-interaction'>
          <SectionSubHeading>Database Interaction</SectionSubHeading>
        </AnchorHeading>

        <p>
          All endpoints act as real-world endpoints, but without actually writing anything to the
          database. In the event that you are creating or updating a resource, the response will
          still contain the updated data despite not persisting it.
        </p>
      </div>

      <div>
        <AnchorHeading anchorId='cors'>
          <SectionSubHeading>CORS</SectionSubHeading>
        </AnchorHeading>

        <p>Cross-origin resource sharing is enabled for all incoming requests.</p>
      </div>

      <div>
        <AnchorHeading anchorId='rate-limiting'>
          <SectionSubHeading>Rate Limiting</SectionSubHeading>
        </AnchorHeading>

        <p>
          The rate limit for a given IP address is 50 requests per minute. The number of requests
          you have remaining can be viewed in the{' '}
          <span className='snippet'>X-Ratelimit-Remaining</span> response header of any request.
        </p>
      </div>

      <div>
        <AnchorHeading anchorId='authorization'>
          <SectionSubHeading>Authorization</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-4'>
          Certain requests require a JWT for authorization. Requests that do require the token are
          indicated as such by the <Lock /> icon. As a general rule, any REST or GraphQL request
          that is reading or writing to a current user&apos;s resources will require the bearer
          token:
        </p>

        <Code code={authorizedRequestHeader} />

        <p className='mt-4 mb-4'>
          For REST calls, a token can be obtained via the{' '}
          <TextLink href='/docs/authentication#log-in' label='log in' /> endpoint. For GraphQL
          calls, you can obtain a token via the <span className='snippet'>login</span> query:
        </p>

        <Code code={graphqlLogin} />

        <p className='mt-4'>
          In both situations, the token will be returned in the response body and will be valid for
          90 days.
        </p>
      </div>

      <div>
        <AnchorHeading anchorId='query-parameters'>
          <SectionSubHeading>Query Parameters</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-6'>
          The following query parameters can optionally be appended to all REST requests. The same
          applies to GraphQL requests, with the exception of <span className='snippet'>fields</span>{' '}
          due to the nature of GraphQL queries.
        </p>

        <div className='overflow-x-auto scrollbar-thin'>
          <table className='table-auto text-left min-w-[814px]'>
            <thead>
              <tr className='border-b-2 border-b-stone-900'>
                <th className='uppercase p-3 w-1/6'>Parameter</th>
                <th className='uppercase p-3 w-3/6'>Description</th>
                <th className='uppercase p-3 w-2/6'>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b-2 border-b-stone-900'>
                <td className='p-3'>
                  <span className='snippet'>sort</span>
                </td>
                <td className='p-3'>
                  Sort the query results by one or more fields (comma-delimited). Sorting defaults
                  to
                  <span className='snippet'>sku</span> (ascending) then{' '}
                  <span className='snippet'>created_at</span> (descending). Use{' '}
                  <span className='snippet'>-</span> to indicate descending order.
                </td>
                <td className='p-3 wrap-break-word'>
                  <span className='snippet'>?sort=-reviews_average,sale_price</span>
                </td>
              </tr>

              <tr className='border-b-2 border-b-stone-900'>
                <td className='p-3'>
                  <span className='snippet'>fields</span>
                </td>
                <td className='p-3'>
                  Filter the query results to specific fields (comma-delimited). Use{' '}
                  <span className='snippet'>-</span> to indicate exclusion.
                </td>
                <td className='p-3 wrap-break-word'>
                  <span className='snippet'>?fields=-user</span>
                </td>
              </tr>

              <tr className='border-b-2 border-b-stone-900'>
                <td className='p-3'>
                  <span className='snippet'>limit</span>
                </td>
                <td className='p-3'>
                  Limit the query results. Defaults to <span className='snippet'>100</span>.
                </td>
                <td className='p-3 wrap-break-word'>
                  <span className='snippet'>?limit=10</span>
                </td>
              </tr>

              <tr className='border-b-2 border-b-stone-900'>
                <td className='p-3'>
                  <span className='snippet'>page</span>
                </td>
                <td className='p-3'>
                  Paginate the query results. Defaults to <span className='snippet'>10</span>.
                </td>
                <td className='p-3 wrap-break-word'>
                  <span className='snippet'>?page=2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <AnchorHeading anchorId='filtering'>
          <SectionSubHeading>Filtering</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-4'>
          Most properties of a resource are valid for applying filters to a query. The exception to
          this is virtual properties that are a byproduct of calculation (e.g. a cart&apos;s total).
          For these properties, it is recommended to filter client-side.
        </p>

        <p className='mb-4'>
          Operators such as <span className='snippet'>gte</span>,{' '}
          <span className='snippet'>lte</span>, <span className='snippet'>gt</span>, and{' '}
          <span className='snippet'>lt</span> are supported (e.g.{' '}
          <span className='snippet'>?sale_price[lte]=100</span>). If you&apos;re filtering by a
          brand with multiple words, you&apos;ll need to separate the words with a - (e.g.{' '}
          <span className='snippet'>?brand=brand-name-here</span>).
        </p>

        <p>
          The following parameters are whitelisted for duplication:{' '}
          <span className='snippet'>reviews_average</span>,{' '}
          <span className='snippet'>reviews_quantity</span>,{' '}
          <span className='snippet'>regular_price</span>,{' '}
          <span className='snippet'>sale_price</span>, <span className='snippet'>brand</span>, and{' '}
          <span className='snippet'>category</span>.
        </p>
      </div>

      <div>
        <AnchorHeading anchorId='graphql'>
          <SectionSubHeading>GraphQL</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-4'>
          StorePI includes a GraphQL API powered by Apollo Server, offering compatibility with any
          GraphQL client, including the popular Apollo Client.
        </p>

        <p className='mb-4'>
          Every request has its equivalent GraphQL query/mutation accessible at
          <span className='snippet'>/graphql</span>. You may pass in the same query parameters as
          REST calls, with the exception of fields. Here&apos;s a sample React and Apollo Client
          query with those arguments in action:
        </p>

        <Code code={graphqlQuery} />

        <p className='mt-4'>
          To explore and test all available GraphQL queries and mutations, visit the{' '}
          <TextLink
            href='https://studio.apollographql.com/sandbox/explorer/?endpoint=https://storepi.herokuapp.com/graphql'
            label='Apollo Sandbox'
          />
          .
        </p>
      </div>
    </>
  );
}
