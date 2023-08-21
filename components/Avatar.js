// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/avatarpunk.png'} width={707} height = {648} alt='avatar' priority={true} className="translate-z-0 w-full h-full"/>
  </div>;
};

export default Avatar;
