// import Link from 'next/link'
// import groq from 'groq'
// import client from '../../client'

// const Index = ({posts}) => {
//   return (
//     <div className='ml-96 mt-40'>
//       <h1 className='text-3xl mb-6'>Welcome to a blog!</h1>
//       <ul>
//         {posts.length > 0 && posts.map(
//           ({ _id, title = '', slug = '', publishedAt = '' }) =>
//             slug && (
//               <Link key={_id} href={`/blogs/post/${encodeURIComponent(slug.current)}`} legacyBehavior>
//                 <a className='block border border-gray-300/20 p-4 mb-4 mr-96 rounded-lg'>
//                   <span className='font-serif text-lg'>
//                     {title}
//                   </span>
//                   <br/>
//                   ({new Date(publishedAt).toDateString()})
//                 </a>
//               </Link>
//             )
//         )}
//       </ul>
//     </div>
//   )
// }

// export async function getStaticProps() {
//   const posts = await client.fetch(groq`
//     *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
//   `)
//   return {
//     props: {
//       posts
//     }
//   }
// }

// export default Index


// frontend/pages/index.tsx

import Link from 'next/link'
import groq from 'groq'
import client from '../../client'

const Index = ({ posts }) => {
  return (
    <div className='relative mx-4 md:mx-24 lg:mx-96 mt-16 md:mt-24 lg:mt-40'>
      <h1 className='text-3xl mb-6'>Welcome to a blog!</h1>
      <ul>
        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <Link key={_id} href={`/blogs/post/${encodeURIComponent(slug.current)}`} legacyBehavior>
                <a className='block border border-gray-300/20 p-4 mb-4 z-50 rounded-lg'>
                  <span className='font-serif text-lg'>
                    {title}
                  </span>
                  <br/>
                  ({new Date(publishedAt).toDateString()})
                </a>
              </Link>
            )
        )}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `)
  return {
    props: {
      posts
    }
  }
}

export default Index
