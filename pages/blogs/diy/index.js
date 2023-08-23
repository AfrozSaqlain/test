import groq from 'groq';
import { createClient } from 'next-sanity';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Card from '../../../components/Card';

const client = createClient({
  projectId: 'm25bacsw',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31',
});

const Index = ({ posts }) => {
  return (
    <div className="relative h-full">
      <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 mt-4 pt-4">
      <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
        <div className="relative mx-4 md:mx-24 lg:mx-96 mt-16 md:mt-24 pb-24 lg:mt-40">
          <h1 className="h2 mb-6 text-center">Welcome to DIY blog!</h1>
          <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.length > 0 ? (
              posts.map(({ _id, title = '', slug = '', publishedAt = '', mainImage }) =>
                slug && <Card key={_id} post={{ title, slug, publishedAt, mainImage }} client={client} />
              )
            ) : (
              <p>No posts to show</p>
            )}
          </ul>
        </div>
      </SimpleBar>
      </div>
    </div>
  );
};


export async function getServerSideProps() {
  const posts = await client.fetch(
    groq`
    *[_type == "post" && publishedAt < now() && count(categories[]->slug.current) > 0 && 'diy' in categories[]->slug.current] | order(publishedAt desc)
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default Index;
