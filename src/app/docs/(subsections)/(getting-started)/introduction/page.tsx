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
import { authorizedRequestHeader } from '@/_lib/api-samples/sample-bodies';
import { Note } from '@/_components/typography/note';
import { List } from '@/_components/list';
import { TextWithCopy } from '@/_components/typography/copyableText';
import { DownloadIcon } from '@/_components/icons/download';

// TODO: add reference of 2 vs 3 tier architecture (e.g. two tier means access directly from process.env.NEXT_PUBLIC_SUPABASE_URL, three tier means access from storepi domain)
// https://supabase.com/docs/guides/api

export default function Introduction() {
  return (
    <>
      <SectionHeading>Introduction</SectionHeading>

      <p>
        StorePI is a free, open-source API that was created for use in e-commerce prototyping,
        Front-End Developer talent evaluations, and anything else you can think of. The API and
        accompanying documentation was built with <span className='snippet'>Next.js</span>,{' '}
        <span className='snippet'>Typescript</span>, <span className='snippet'>Tailwind CSS</span>,{' '}
        <span className='snippet'>Supabase</span>, and <span className='snippet'>Vercel</span>.
      </p>

      <p>
        It provides resources such as <span className='snippet'>products</span>,{' '}
        <span className='snippet'>reviews</span>, <span className='snippet'>users</span>,{' '}
        <span className='snippet'>carts</span>, <span className='snippet'>purchases</span>, and
        more. Endpoints are provided to perform CRUD operations on each of these resources, both as
        an anonymous user and as an authenticated user.
      </p>

      <Image
        src='/images/storepi-demo.png'
        width={1280}
        height={720}
        className='rounded-sm opacity-0 animate-fadeIn'
        alt='StorePI demo'
        priority
      />

      <Note
        showNote={false}
        largeMargin={false}
        noteText={
          <span>
            If you&apos;re the Postman type, you can find that version of the documentation{' '}
            <TextLink
              href='https://documenter.getpostman.com/view/12907395/UyxjF694'
              label='here'
            />
            .
          </span>
        }
      />

      <div>
        <AnchorHeading anchorId='database-interaction'>
          <SectionSubHeading>Database Interaction</SectionSubHeading>
        </AnchorHeading>

        <p>
          A default dataset is provided with this API. It consists of 19 users (each with a cart and
          wishlist), 50 products, 6 categories, 44 brands, 160 product reviews, and 50 purchases.
        </p>
      </div>

      <p>
        That said, you do have the ability to interact with the database and persist your custom
        data with select resources. Notably, You may{' '}
        <TextLink href='/docs/authentication#sign-up' label='sign up as a new user' /> and perform
        any of the following actions as your new user:
      </p>

      <List>
        <>
          <li>Log in</li>
          <li>Modify your profile, email, or password </li>
          <li>Create/edit reviews</li>
          <li>Add/remove cart items</li>
          <li>Add/remove wishlist items</li>
          <li>Create a new purchase</li>
        </>
      </List>

      <Note
        showNote={false}
        largeMargin={false}
        noteText={
          <span>
            While creating your own user is recommended, you may also perform any of the above
            actions as one of the users from the original dataset. When doing so, the endpoint will
            still respond as if the request were successful, but your data will not be persisted.
            See <TextLink href='authentication#log-in' label='logging in' /> for information on how
            to authenticate as one of these users.
          </span>
        }
      />

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
          indicated as such by the <Lock /> icon. As a general rule, any request that is reading or
          writing to a <em>current user&apos;s</em> resources will require the bearer token:
        </p>

        <Code code={authorizedRequestHeader} />

        <p className='mt-4'>
          A bearer token can be obtained via the{' '}
          <TextLink href='/docs/authentication#log-in' label='log in' /> endpoint, where it will be
          returned in the request body and be valid for 12 hours.
        </p>
      </div>

      <div>
        <AnchorHeading anchorId='organizing-results'>
          <SectionSubHeading>Organizing Results</SectionSubHeading>
        </AnchorHeading>

        <p className='mb-6'>
          The following query parameters can optionally be appended to all{' '}
          <span className='snippet'>GET</span> requests.
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
                  Sort the query results by one or more fields (comma-delimited). Use{' '}
                  <span className='snippet'>-</span> to indicate descending order.
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
            <Note
              showNote={false}
              largeMargin={false}
              noteText={
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

        <p className='mb-6'>
          Thanks to its reliance on Supabase, StorePI comes with{' '}
          <TextLink
            href='https://supabase.github.io/pg_graphql/supabase/#http-request'
            label='pg_graphql'
            newTab
          />{' '}
          - a PostgreSQL extension that enables querying the database with GraphQL using a single
          SQL function. The following variables will be needed:
        </p>

        <GenericTable>
          <TableHead>
            <th className='uppercase p-3 w-1/3'>Variable</th>
            <th className='uppercase p-3 w-2/3'>Value</th>
          </TableHead>

          <tbody>
            <TableRow>
              <TableCell>
                <span className='snippet'>PROJECT_REF</span>
              </TableCell>
              <TableCell wrap>
                <TextWithCopy textToCopy='wkzyrrbzyyljtvkayjyn' useSnippetStyling={false}>
                  wkzyrrbzyyljtvkayjyn
                </TextWithCopy>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                <span className='snippet'>API_KEY</span>
              </TableCell>
              <TableCell wrap>
                <TextWithCopy
                  textToCopy={process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string}
                  useSnippetStyling={false}
                >
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string}
                </TextWithCopy>
              </TableCell>
            </TableRow>
          </tbody>
        </GenericTable>

        <p className='flex gap-2 mt-6'>
          <a
            href='/supabase_graphiql.html'
            className='underline transition-colors hover:text-indigo-300 text-indigo-400'
            download
          >
            <DownloadIcon />
          </a>
          <span>Download the GraphiQL snippet to explore the GraphQL schema in-browser</span>
        </p>
      </div>
    </>
  );
}
