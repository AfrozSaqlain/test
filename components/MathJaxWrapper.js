// import { useEffect } from 'react';

// const MathJaxWrapper = ({ content }) => {
//   useEffect(() => {
//     // Load MathJax and render equations
//     if (typeof window !== 'undefined') {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
//       script.async = true;
//       document.head.appendChild(script);
//       return () => {
//         // Cleanup: Remove the dynamically added script when the component is unmounted
//         document.head.removeChild(script);
//       };
//     }
//   }, []);

//   return (
//     <div>
//       <div dangerouslySetInnerHTML={{ __html: content }} />
//     </div>
//   );
// };

// export default MathJaxWrapper;




// // // components/MathJaxWrapper.js
// // import React from 'react';
// // import renderMathInElement from 'katex/contrib/auto-render';

// // const cachedEquations = {};

// // const MathJaxWrapper = ({ content }) => {
// //   const containerRef = React.useRef(null);

// //   React.useEffect(() => {
// //     if (typeof window !== 'undefined') {
// //       renderMathInElement(containerRef.current, {
// //         delimiters: [
// //           { left: '$$', right: '$$', display: true },
// //           { left: '$', right: '$', display: false },
// //         ],
// //       });
// //     }
// //   }, []);

// //   return (
// //     <div ref={containerRef} dangerouslySetInnerHTML={{ __html: cachedEquations[content] || content }} />
// //   );
// // };

// // export default MathJaxWrapper;


import React, { useEffect, useRef } from 'react';

const MathJaxWrapper = ({ content }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (containerRef.current && typeof MathJax !== 'undefined') {
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, containerRef.current]);
        }
    }, [content]);

    return (
        <div ref={containerRef} dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default MathJaxWrapper;
