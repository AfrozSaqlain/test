// //next image
// import Image from 'next/image';

// //next link
// import Link from 'next/link';

// //icons
// import { HiArrowRight } from 'react-icons/hi2';

// const ProjectsBtn = () => {
//   return (
//     <div className='mx-auto xl:mx-0'>
//       <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
//         <Image
//           src={'/rounded-text.png'}
//           width = {141}
//           height = {148}
//           alt = ''
//           className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
//           />
//           <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
//       </Link>
//     </div>
//   );
// };

// export default ProjectsBtn;


// Next.js Link component
import Link from 'next/link';

// React icon
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='w-[135px] h-[135px] mx-auto xl:mx-0 -translate-y-10'>
      <Link href='/work'>
        <div className='relative w-full h-full flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'>
          <img
            src='/rounded-text.png'
            width={101}
            height={108}
            alt='Project Button'
            className='animate-spin-slow max-w-[101px] max-h-[108px]'
          />
          <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300' />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
