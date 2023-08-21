// testimonial slider data
export const testimonialSlider = [
  {
    image: '/DrAPJAbdulKalam.png',
    name: 'Dr. APJ Abdul Kalam',
    position: 'Customer',
    message:
      ' A dream is not that which you see while sleeping it is something that does not let you sleep.',
  },
  {
    image: '/RichardFeynman.png',
    name: 'Richard Feynman',
    position: 'Customer',
    message:
      'Nobody ever figures out what life is all about, and it doesn\'t matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.',
  },
  {
    image: '/NikolaTesla.png',
    name: 'Nikola Tesla',
    position: 'Customer',
    message:
      'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
  },
];

//next image
import Image from 'next/image';

import React from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import {FaQuoteLeft} from 'react-icons/fa';


const TestimonialSlider = () => {
  return (
    <Swiper 
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {
        testimonialSlider.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                {/* avatar, name, position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'>
                    {/* avatar */}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='Person'/>
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    {/* <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div> */}
                  </div>
                </div>
                {/* quote & message */}
                <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                  {/* quote icon */}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                  </div>
                  {/* message */}
                  <div className='xl:text-lg text-center md:text-left'>
                    {person.message}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default TestimonialSlider;
