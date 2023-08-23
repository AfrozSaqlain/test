import React from "react";
import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../variants'

const Home = () => {
  return (
    <>
      <div className='bg-primary/60 h-full'>
        {/*text*/}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
            {/* title */}
            <motion.h2
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2'>
              Testing Ideas <br /> Into {' '}
              <span className='text-accent'>Reality</span>
            </motion.h2>
            {/* subtitle */}
            <motion.div
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
              <p className="mb-3"> In the vastness of space and time, Our love is like a quantum rhyme, Entangled forever, yours and mine.</p>
              {/* <br /> <br /> */}
              <p className="mb-3"> As we journey through life&rsquo;s great expanse, Our love will grow with each quantum dance, A bond that nothing can ever chance.</p>
              {/* <br /> <br /> */}
              <p className="mb-3"> From the smallest particles to the stars above, Our love is bound by quantum love, A force that nothing can ever shove.</p>
            </motion.div>
            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* Image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
            <Image
              src="/bg-explosion.png"
              alt="Background Image"
              fill="responsive"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="hidden xl:flex"
              loading="eager"
            />
          </div>
          {/* particles */}
          <ParticlesContainer />
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="w-full h-full max-w-[666px] max-h-[607px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
