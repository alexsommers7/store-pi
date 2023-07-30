import Image from 'next/image';
import { SectionHeading } from '@/_components/typography/sectionHeading';
import { SectionSubHeading } from '@/_components/typography/sectionSubHeading';
import { TextLink } from '@/_components/navigation/textLink';
import { Code } from '@/_components/typography/code';
import { Lock } from '@/_components/icons/lock';
import { AnchorHeading } from '@/_components/typography/anchorHeading';
import { GenericTable } from '@/_components/table';
import { TableHead } from '@/_components/table/head';
import { TableRow } from '@/_components/table/row';
import { TableCell } from '@/_components/table/cell';
import {
  authorizedRequestHeader,
  graphqlLogin,
  graphqlQuery,
} from '@/_lib/api-samples/sample-bodies';
import { Tip } from '@/_components/typography/tip';

export default function Introduction() {
  return (
    <>
      <SectionHeading>Introduction</SectionHeading>

      <p>
        StorePI is a free, open-source REST and GraphQL API that was created for use in e-commerce
        prototyping, Front-End Developer talent evaluations, and anything else you can think of. The
        API and accompanying documentation was built with <span className='snippet'>Next.js</span>,{' '}
        <span className='snippet'>Typescript</span>, <span className='snippet'>Tailwind CSS</span>,{' '}
        <span className='snippet'>Vercel</span>, and <span className='snippet'>Supabase</span>.
      </p>

      <p>
        It provides resources such as <span className='snippet'>products</span>,{' '}
        <span className='snippet'>reviews</span>, <span className='snippet'>users</span>,{' '}
        <span className='snippet'>carts</span>, <span className='snippet'>purchases</span>, and
        more. Endpoints are provided to perform CRUD operations on each of these resources.
      </p>

      <Image
        src='/images/storepi-demo.png'
        width={1280}
        height={720}
        className='rounded-sm opacity-0 animate-fadeIn'
        alt='StorePI demo'
        priority
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
          Most endpoints act as real-world endpoints, but without actually writing anything to the
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
          12 hours.
        </p>
      </div>

      <div>
        <AnchorHeading anchorId='organizing-results'>
          <SectionSubHeading>Organizing Results</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-6'>
          The following query parameters can optionally be appended to all{' '}
          <span className='snippet'>GET</span> requests. The same applies to GraphQL requests, with
          the exception of <span className='snippet'>fields</span> due to the nature of GraphQL
          queries.
        </p>

        <div className='overflow-x-auto scrollbar-thin'>
          <GenericTable>
            <TableHead>
              <th className='uppercase p-3 w-1/6'>Parameter</th>
              <th className='uppercase p-3 w-3/6'>Description</th>
              <th className='uppercase p-3 w-2/6'>Example</th>
            </TableHead>

            <tbody>
              <TableRow>
                <TableCell>
                  <span className='snippet'>sort</span>
                </TableCell>
                <TableCell wrap>
                  Sort the query results by one or more fields (comma-delimited). Sorting defaults
                  to chronological order. Use <span className='snippet'>-</span> to indicate
                  descending order.
                </TableCell>
                <TableCell>
                  <span className='snippet'>?sort=-sale_price,-regular_price</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className='snippet'>fields</span>
                </TableCell>
                <TableCell wrap>
                  Filter the query results to one or more specific fields (comma-delimited).
                </TableCell>
                <TableCell>
                  <span className='snippet'>?fields=name,sale_price</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className='snippet'>limit</span>
                </TableCell>
                <TableCell wrap>
                  Limit the query results. Defaults to <span className='snippet'>20</span>.
                </TableCell>
                <TableCell>
                  <span className='snippet'>?limit=10</span>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <span className='snippet'>offset</span>
                </TableCell>
                <TableCell wrap>
                  Paginate the query results. Defaults to <span className='snippet'>1</span>.
                </TableCell>
                <TableCell>
                  <span className='snippet'>?offset=2</span>
                </TableCell>
              </TableRow>
            </tbody>
          </GenericTable>

          <div className='mt-8'>
            <Tip
              tipText={
                <span>
                  If the <span className='snippet'>limit</span> or{' '}
                  <span className='snippet'>offset</span> parameter is passed, the response json
                  will contain a <span className='snippet'>nextOffset</span> value if not already at
                  the end.
                </span>
              }
            />
          </div>
        </div>
      </div>

      <div>
        <AnchorHeading anchorId='filtering-results'>
          <SectionSubHeading>Filtering Results</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-4'>
          All fields of a given resource are valid for applying filters to a query. A full list of
          these fields can be found on each resource&apos;s page. The following operators are
          supported for <span className='snippet'>GET</span> requests:
        </p>

        <GenericTable>
          <TableHead>
            <th className='uppercase p-3 w-1/6'>Parameter</th>
            <th className='uppercase p-3 w-3/6'>Description</th>
            <th className='uppercase p-3 w-2/6'>Example</th>
          </TableHead>

          <tbody>
            <TableRow>
              <TableCell>
                <span className='snippet'>[field]=[value]</span>
              </TableCell>
              <TableCell wrap>
                Standard equality - the value must match the field&apos;s value exactly.
              </TableCell>
              <TableCell>
                <span className='snippet'>?in_stock=true</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className='snippet'>[field]_greater_than</span>
              </TableCell>
              <TableCell wrap>The value must be greater than the field&apos;s value.</TableCell>
              <TableCell>
                <span className='snippet'>?sale_price_greater_than=100</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className='snippet'>[field]_greater_than_or_equal_to</span>
              </TableCell>
              <TableCell wrap>
                The value must be greater than or equal to the field&apos;s value.
              </TableCell>
              <TableCell>
                <span className='snippet'>?sale_price_greater_than_or_equal_to=100</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className='snippet'>[field]_less_than</span>
              </TableCell>
              <TableCell wrap>The value must be less than the field&apos;s value.</TableCell>
              <TableCell>
                <span className='snippet'>?sale_price_less_than=200</span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className='snippet'>[field]_less_than_or_equal_to</span>
              </TableCell>
              <TableCell wrap>
                The value must be less than or equal to the field&apos;s value.
              </TableCell>
              <TableCell>
                <span className='snippet'>?sale_price_less_than_or_equal_to=200</span>
              </TableCell>
            </TableRow>
          </tbody>
        </GenericTable>
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
