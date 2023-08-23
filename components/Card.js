import React, { useState } from 'react';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';

const Card = ({ post, client }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const urlFor = source => imageUrlBuilder(client).image(source); // Define urlFor here

  return (
    <Link href={`/blogs/post/${encodeURIComponent(post.slug.current)}`} legacyBehavior>
      <a
        className={`block border border-gray-300/20 p-2 z-50 rounded-lg hover:shadow-lg hover:shadow-slate-300 transition duration-300 ${
          isHovered ? 'hover:scale-105' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden h-40 md:h-56 lg:h-64 mb-2">
          <Image
            src={urlFor(post.mainImage.asset).url()}
            width={500}
            height={500}
            alt={post.title}
            className="w-full rounded-lg h-full object-cover"
          />
        </div>
        <span className="font-serif text-lg">{post.title}</span>
        <p className="text-sm text-gray-500 mb-2">{new Date(post.publishedAt).toDateString()}</p>
      </a>
    </Link>
  );
};

export default Card;