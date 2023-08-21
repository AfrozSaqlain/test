// links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiPinterestLine,
} from 'react-icons/ri';

import {
  CgShutterstock
} from 'react-icons/cg'

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg transform -translate-y-10 md:translate-y-0">
      <Link href={'https://www.youtube.com/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine/>
      </Link>
      <Link href={'https://www.facebook.com/sqn3680'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine/>
      </Link>
      <Link href={'https://www.instagram.com/afroz_3680/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/saqlain-afroz-7a47961b8/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine/>
      </Link>
      <Link href={'https://github.com/AfrozSaqlain'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiGithubLine/>
      </Link>
      <Link href={'https://www.shutterstock.com/g/Maverick3680/about'} target="_blank" className="hover:text-accent transition-all duration-300">
        <CgShutterstock/>
      </Link>
      <Link href={'https://www.pinterest.com/sqn3680/'} target="_blank" className="hover:text-accent transition-all duration-300">
        <RiPinterestLine/>
      </Link>
    </div>
  );
};

export default Socials;
