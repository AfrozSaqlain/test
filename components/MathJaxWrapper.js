import React, { useEffect, useRef } from 'react';

const MathJaxWrapper = ({ content }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML';
        // script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.3.4/es5/tex-mml-chtml.js';
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
