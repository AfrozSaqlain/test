import React, { useState } from 'react';
// import Image from 'next/image';

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiArduino,
} from 'react-icons/si';

import{
  BiLogoCPlusPlus,
} from 'react-icons/bi'

//about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={1}/>,
          <FaCss3 key={2}/>,
          <FaJs key={3}/>,
          <FaReact key={4}/>,
          <SiNextdotjs key={5}/>,
          <SiFramer key={6}/>,
          <FaWordpress key={7}/>,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={1}/>, <SiAdobexd key={2}/>, <SiAdobephotoshop key={3}/>],
      },
      {
        title: 'Programming Language',
        icons: [<FaPython key={1}/>, <BiLogoCPlusPlus key={2}/>, <SiArduino key={3}/>],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'UP Science Talent Search Examination',
        stage: '2016 - 2017',
      },
      {
        title: 'NCC Special Trophy',
        stage: '2016 - 2017',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Gravitational Wave Astronomy (CESSI)',
        stage: '2022 - 2023',
      },
      {
        title: 'Quantum Computation',
        stage: '2022 - 2023',
      },
      {
        title: 'AI/ML Poject in Law',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'UP Sainik School, Lucknow, India',
        stage: '2015 - 2019',
      },
      {
        title: 'IISER Kolkata, West Bengal, India',
        stage: '2020 - ongoing',
      },
    ],
  },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//counters
import CountUp from 'react-countup';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-scroll md:overflow-y-auto'>
      <Circles />
      {/* avatar img */}
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[320px] max-w-[666px] max-h-[607px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>
            Captivating <span className='text-accent'>stories</span>.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            I always had the curiosity to know the unknown and to venture on a quest of knowledge. I have been doing researchin the field of Astrophysics, I play guitar, write codes and I am also interested in financial markets. So, join me on this journey.
          </motion.p>
          {/* counters */}
          <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={4} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Projects completed
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='text2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div> 
        </div>
        {/* info */}
        <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className='text-2xl text-white'>{icon}</div>
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className='hidden xl:flex xl:max-w-none translate-x-16'>
            <Image src='/profile-pic-2.png' alt='profile pic' width={200} height={200}/>
          </div> */}
        </motion.div>
      </div>
    </div >
  );
};

export default About;
