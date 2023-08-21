import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Astro = () => {
    const sections = [
        {
            title: 'Specific Intensity',
            content: 'The specific intensity is given as: \\(I_{\\nu} = B_{\\nu}(T)\\)',
        },
        {
            title: 'Total Flux',
            content: `Total flux is 
            \\[\\begin{align}  
                F &= \\int_{0}^{\\infty} I_{\\nu} d\\nu \\\\ 
                &= \\sigma T^{4} \\end{align}
           \\]
           Field has \\(\\infty\\) degrees of freedom. <br/> <br/>
            Notation: \\(\\phi(\\vec{x}, t)\\) <br/> <br/>
            It may be:
            <ul class="list-disc ml-8 my-4">
                <li class="mb-2">Fundamental Field</li>
                <li class="mb-2">Component of an object \\( \\phi^A (t, \\vec{x}) \\)</li>
                <li class="mb-2">Can be part of internal space: \\[ \\phi^A (t, \\vec{x}) = \\int \\phi_k e^{ik \\cdot x} d^3k \\]</li>
              </ul>
            <br/>
            In general:
            \\[
                \\phi(\\vec{x}, t) : \\mathcal{L} = \\mathcal{L}(\\phi(x^\\mu), \\partial_\\mu \\phi(x^\\mu))\\\\
                x^\\mu = (x^0, \\vec{x}) = (t, \\vec{x})
            \\]
            <br/>
            Action:
            \\[
                S = \\int \\mathcal{L} d^4x \\to \\text{Lagrangian Density}
            \\]
            <br/>
            No we look into Notations:
            \\[
                x^\\mu = (x^0, \\vec{x}) = (ct, \\vec{x}) , \\text{  } [c=\\hbar = 1 \\text{ in  natural units}]
            \\]
            \\[
                \\eta_{\\mu \\nu} = \\text{Diagonal}(1, -1, -1, -1)
            \\]
            \\[
                \\eta^{\\mu \\nu} = \\text{Diagonal}(1, -1, -1, -1)
            \\]
            \\[
                \\eta^{\\mu \\nu} \\eta_{\\nu \\mu} = \\mathbb{1}  
            \\]
            \\[    
                x_\\mu = \\eta_{\\mu \\nu} x^\\nu = (t, -\\vec{x})  
            \\]
            \\[    
                A \\cdot B = \\eta_{\\mu \\nu} A^\\mu B^\\nu = A^0 B^0 - A^i B^i 
            \\]    
            \\[    
                A^\\mu = (A^0, \\vec{A}) 
            \\] 
            \\[
                A_\\mu = (A^0, -\\vec{A})
            \\]
            \\[    
                A^2 = A^0 A^0 - A^i A^i  \\begin{cases}
                    > 0, \\text{ timelike}\\\\
                    = 0, \\text{ lightlike}\\\\
                    < 0, \\text{ spacelike}
                \\end{cases}
                \\\\
            \\]
            \\[
                \\partial_\\mu = \\frac{\\partial}{\\partial x^\\mu} = (\\frac{\\partial}{\\partial t}, \\vec{\\nabla})
            \\]
            \\[
                \\partial^\\mu = \\eta^{\\mu \\nu} \\partial_\\nu = (\\frac{\\partial}{\\partial t}, -\\vec{\\nabla})    
            \\]
            \\[
                \\partial_\\mu A^\\mu = \\partial_0 A^0 + \\partial_i A^i
            \\]
            \\[
                \\begin{align}
                    p^\\mu &= i\\partial^\\mu = \\left( i \\frac{\\partial}{\\partial t}, - i \\vec{\\nabla} \\right) = (E, \\vec{p})\\\\
                    p_\\mu &= (E, -\\vec{p})\\\\
                    p^2 &= p_\\mu p^\\mu = E^2 - \\vec{p}^2
                \\end{align}
            \\]
            Einstein's Equation:
            \\[
                E^2 = \\vec{p}^2 + m^2\\\\
            \\]
            \\[
                p^2 = m^2    
            \\]
            \\[
                \\square = \\partial_\\mu \\partial^\\mu = \\frac{\\partial^2}{\\partial t^2} - \\nabla^2    
            \\]
            \\[
                \\begin{align}
                    x \\cdot p &= \\eta_{\\mu \\nu} x^\\mu p^\\nu \\\\ 
                               &= x^0 p^0 - x^i p^j\\\\ 
                               &= Et - \\vec{x} \\cdot \\vec{p} = \\text{Invariant}   
                \\end{align}
            \\]
            We have Euler Lagrange Equation given as:
            \\[
                \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = 0
            \\]
            Now, let us take an example of Maxwell's Equation: 
            \\[
                \\mathcal{L} = -\\frac{1}{4} F_{\\mu \\nu} F^{\\mu \\nu}    
            \\]
            where \\(F_{\\mu \\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu \\)
            <br/>
            <br/>
            <p class='text-center text-xl text underline underline-offset-8 font-semibold text-white'>Gauge Invariance</p>
            <ul class="list-disc ml-8 my-4">
                <li class="mb-2">\\(A_\\mu \\to A_\\mu + \\partial_\\mu K^\\mu\\) remains invariant. We can write action for \\(\\mathcal{L}\\) as: \\(S = \\int \\mathcal{L} d^4x \\) and for \\(\\mathcal{L}'\\) as: \\(S' = \\int \\mathcal{L}' d^4x \\). Now,
                \\[
                    \\begin{align}
                        \\delta S' &= \\delta \\int \\mathcal{L} d^4x + \\delta \\int d^4 x \\partial_\\mu K^\\mu \\\\
                                   &= \\delta \\int \\mathcal{L} d^4x + \\int d^4 x \\partial_\\mu (\\delta K^\\mu) \\\\
                                   &= \\delta \\int \\mathcal{L} d^4x + \\delta K^\\mu|_{\\text{surface}} \\\\
                                   &= \\delta \\int \\mathcal{L} d^4x\\\\
                                   &= 0
                    \\end{align}    
                \\]
                    Hence E.O.M. remains invariant if two \\(\\mathcal{L}\\) are separated by a total derivative of any arbitrary field.
                </li>
                <li class="mb-2">Lorentz Invariance is not required</li>
            </ul>
            <br/>
            Fields are continuous functions of space and time and they die asympotically. <br/>
            <br/>
            Let's take an example of a free scalar field:
            \\[
                \\mathcal{L} = \\frac{1}{2} \\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2} m^2 \\phi^2
            \\]
            Now, we can write Euler Lagrange Equation as:
            \\[
                \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = 0 \\\\
                \\frac{\\partial \\mathcal{L}}{\\partial \\phi} = -m^2 \\phi \\\\
                \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) = \\partial_\\mu \\partial^\\mu \\phi
            \\]
            where \\( \\frac{\\partial \\mathcal{L}}{\\partial \\phi} = -m^2 \\phi \\) and for \\(\\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right)\\) let's first find out \\( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\) and for that we change the subscript \\(\\mu\\) to say \\(\\alpha\\) in \\(\\mathcal{L}\\) and let's solve now:
           `,
        },
        // Add more sections here
    ];


    return (
        <div className="relative h-full">
            <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                    <div className="max-w-4xl mx-auto p-4 shadow-2xl rounded-lg">
                        <h1 className="text-2xl font-semibold text-center font-mono justify-center text-accent mb-4">Astrophysics</h1>
                        {sections.map((section, index) => (
                            <ExpandableSection key={index} title={`${index + 1}. ${section.title}`}>
                                <MathJaxWrapper content={section.content} />
                            </ExpandableSection>
                        ))}
                    </div>
                </div>
            </SimpleBar>
        </div>
    );
};

const ExpandableSection = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mb-4">
            <div
                className="flex items-center cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <div
                    className={`ml-2 transition-transform transform ${
                        expanded ? 'rotate-[90deg]' : 'rotate-0'
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            {expanded && <div className="mt-2">{children}</div>}
        </div>
    );
};


export default Astro;
