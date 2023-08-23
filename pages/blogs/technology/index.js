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
          <h1 className="h2 mb-6 text-center">Welcome to Tech blog!</h1>
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
    *[_type == "post" && publishedAt < now() && count(categories[]->slug.current) > 0 && 'technology' in categories[]->slug.current] | order(publishedAt desc)
    `
  );

  return {
    props: {
      posts,
    },
  };
}

export default Index;


// import React, { useState, useEffect } from 'react';

// const Index = ({ posts }) => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateCursorPosition = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', updateCursorPosition);

//     return () => {
//       window.removeEventListener('mousemove', updateCursorPosition);
//     };
//   }, []);

//   const handleMouseMove = (e, cardRef) => {
//     const card = cardRef.current;
//     const cardRect = card.getBoundingClientRect();

//     const mouseX = e.clientX - cardRect.left;
//     const mouseY = e.clientY - cardRect.top;

//     const centerX = cardRect.width / 2;
//     const centerY = cardRect.height / 2;

//     const rotateX = ((centerY - mouseY) / cardRect.height) * 10;
//     const rotateY = ((centerX - mouseX) / cardRect.width) * 10;

//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
//   };

//   const handleMouseLeave = (cardRef) => {
//     const card = cardRef.current;
//     card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
//   };

//   const cardRef = React.createRef();

//   return (
//     <div className="relative h-full">
//       <SimpleBar forceVisible="y" autoHide={true} className="overflow-visible overscroll-y-auto h-full">
//         <div className="relative mx-4 md:mx-24 lg:mx-96 mt-16 md:mt-24 pb-24 lg:mt-40">
//           <h1 className="text-3xl mb-6 text-accent">Welcome to Tech blog!</h1>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {posts.length > 0 ? (
//               posts.map(({ _id, title = '', slug = '', publishedAt = '', mainImage }) =>
//                 slug && (
//                   <Link key={_id} href={`/blogs/post/${encodeURIComponent(slug.current)}`} legacyBehavior>
//                     <a
//                       className="block border border-gray-300/20 p-4 z-50 rounded-lg hover:shadow-md transition duration-300 transform-gpu"
//                       onMouseMove={(e) => handleMouseMove(e, cardRef)}
//                       onMouseLeave={() => handleMouseLeave(cardRef)}
//                     >
//                       <div
//                         ref={cardRef}
//                         className="relative overflow-hidden h-40 md:h-56 lg:h-64 mb-4 rounded-lg transition-transform duration-300 transform-gpu"
//                       >
//                         <img src={urlFor(mainImage).url()} alt={title} className="w-full h-full object-cover rounded-lg" />
//                       </div>
//                       <span className="font-serif text-lg">{title}</span>
//                       <p className="text-sm mt-2">{new Date(publishedAt).toDateString()}</p>
//                     </a>
//                   </Link>
//                 )
//               )
//             ) : (
//               <p>No posts to show</p>
//             )}
//           </div>
//         </div>
//       </SimpleBar>
//     </div>
//   );
// };


// const client = createClient({
//   projectId: 'wvm2brko',
//   dataset: 'production', // or the name you chose in step 1
//   useCdn: true, // `false` if you want to ensure fresh data
//   apiVersion: '2021-08-31',
// });

// export async function getServerSideProps() {
//   const posts = await client.fetch(
//     groq`
//     *[_type == "post" && publishedAt < now() && count(categories[]->slug.current) > 0 && 'technology' in categories[]->slug.current] | order(publishedAt desc)
//     `,
//   );
  
//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Index;

// import React, { useState, useEffect, useRef } from 'react';
// import imageUrlBuilder from '@sanity/image-url';
// import { createClient } from 'next-sanity';
// import groq from 'groq';
// import SimpleBar from 'simplebar-react';
// import 'simplebar-react/dist/simplebar.min.css';
// import Link from 'next/link';
