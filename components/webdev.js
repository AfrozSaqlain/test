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

//import required modules
// import { FreeMode, Pagination } from 'swiper';
SwiperCore.use([FreeMode, Pagination]);

// data
const serviceData = [
  {
    icon: <RiStockLine />,
    title: 'Basic HTML/ CSS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: '../services/stock_market',
  },
  {
    icon: <RxPencil2 />,
    title: 'JavaScript',
    description: 'Click here to buy S223 Ultra. The King of Smartphones!',
    url: '../services/technology/index.js',
  },
  {
    icon: <RxDesktop />,
    title: 'ReactJS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: '../services/web_dev/index.js',
  },
  {
    icon: <RxReader />,
    title: 'NextJS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: '../services/aiml/index.js',
  },
  {
    icon: <RxRocket />,
    title: 'CMS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: '../services/diy/index.js',
  },
];

const webdev = () => {
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

export default webdev;
