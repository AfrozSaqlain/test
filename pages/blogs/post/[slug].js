import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
// import client from '../../../client'
import { createClient } from "next-sanity";

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    },
  }
}

const Post = ({post}) => {

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
    <article className="max-w-prose mx-auto p-4 mt-24 shadow-2xl">
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
          <img
            className="w-12 h-12 rounded-full"
            src={urlFor(authorImage).width(50).url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}
      <PortableText value={body} components={ptComponents} />
    </article>
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
export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "post" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post