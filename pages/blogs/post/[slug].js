import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
// import client from '../../../client'
import { createClient } from "next-sanity";
import Image from 'next/image'
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      // Generate the URL directly here
      const imageUrl = urlFor(value).fit('max').auto('format').url();

      return (
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          width={320}
          height={240}
          src={imageUrl} // Pass the generated URL here
          className='rounded-lg justify-center mx-auto items-center shadow-lg'
        />
      );
    },
  }
};


const Post = ({ post }) => {

  if (!post) {
    // Handle the case when post data is not available
    return <div>Loading...</div>; // You can render a loading state here
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = []
  } = post
  return (
    <div className="relative h-full">
      <div className='h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 mt-4 pt-4'>
        <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
          <article className="max-w-prose mx-auto w-auto p-4 mt-4 shadow-2xl mb-10 pt-4">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <span className="text-gray-500">By {name}</span>
            {categories && (
              <ul className="mt-2 mb-4">
                Posted in
                {categories.map((category) => (
                  <li key={category} className="inline-block mr-2 text-blue-500">
                    {category}
                  </li>
                ))}
              </ul>
            )}
            {authorImage && (
              <div className="mb-4">
                <Image
                  className="w-12 h-12 rounded-full"
                  src={urlFor(authorImage).width(50).url()}
                  width={50}
                  height={50}
                  alt={`${name}'s picture`}
                />
              </div>
            )}
            <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
              <PortableText value={body} components={ptComponents} />
            </div>
          </article>
        </SimpleBar>
      </div>
    </div>
  );
};

const client = createClient({
  projectId: 'm25bacsw',
  dataset: 'production',// or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2021-08-31',
})


const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

export async function getServerSideProps(context) {
  const { slug = "" } = context.query; // Note the change from `params` to `query`

  const post = await client.fetch(query, { slug });

  return {
    props: {
      post
    }
  };
}

export default Post