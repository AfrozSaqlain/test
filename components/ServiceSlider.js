import React from 'react';

import SwiperCore, { FreeMode, Pagination } from 'swiper';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//icons
import {
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

import {
  RiStockLine
} from 'react-icons/ri'

import {
  GiClothes
} from 'react-icons/gi'

//import required modules
// import { FreeMode, Pagination } from 'swiper';
SwiperCore.use([FreeMode, Pagination]);

// data
const serviceData = [
  {
    icon: <RiStockLine />,
    title: 'Investment',
    description: 'Guide to understanding of trading and investment.',
    url: '../blogs/financial_investment',
  },
  {
    icon: <RxPencil2 />,
    title: 'Technology',
    description: 'A comprehensive review on latest and essential gadgets.',
    url: '../blogs/technology',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'A guide to web dev using best SEO practices.',
    url: '../blogs/web_dev',
  },
  {
    icon: <RxReader />,
    title: 'AI/ML',
    description: 'Learn to create AI models and LLM and have fun.',
    url: '../blogs/aiml',
  },
  {
    icon: <RxRocket />,
    title: 'DIY',
    description: 'We will build stuffs like robots and creative art stuffs.',
    url: '../blogs/diy',
  },
  {
    icon: <GiClothes />,
    title: 'Fashion',
    description: 'What to wear and what not to wear.',
    url: '../blogs/fashion',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

    }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          const handleIconClick = (url) => {
            window.location.href = url;
          };
          return (
            <SwiperSlide key={index}>
              <a href={item.url} // Use the URL specified in the item
                onClick={(e) => {
                  e.preventDefault();
                  handleIconClick(item.url); // Pass the URL to the handler function
                }}
              >
                <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                  {/* icon */}
                  <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                  {/* title & desc */}
                  <div className='mb-8'>
                    <div className='mb-2 text-lg'>{item.title}</div>
                    <p className='max-w-[350px] leading-normal'>
                      {item.description}
                    </p>
                  </div>
                  {/* arrow */}
                  <div className='text-3xl'>
                    <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
