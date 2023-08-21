//fonts
import {Sora} from '@next/font/google'

//font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100','200','300','400','500','600','700','800']
});

//components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'


const Layout = ({children}) => {
  return (
  <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    {children}
  </div>
  );
};

export default Layout;


// //fonts
// import { Sora } from '@next/font/google'

// //font settings
// const sora = Sora({
//   subsets: ['latin'],
//   variable: '--font-sora',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800']
// });

// //components
// import Nav from '../components/Nav'
// import Header from '../components/Header'
// import TopLeftImg from '../components/TopLeftImg'
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// const Layout = ({ children }) => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Initial check

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const excludedRoutes = ['/excluded-page', '/excluded-page/subpage'];
//   const shouldRenderTopLeftImg = !excludedRoutes.includes(router.pathname) && !isSmallScreen;

//   return (
//     <div className={'page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative'}>
//       {shouldRenderTopLeftImg && <TopLeftImg />}
//       <Nav />
//       <Header />
//       {children}
//     </div>
//   );
// };

// export default Layout;
