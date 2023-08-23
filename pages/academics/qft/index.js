import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import ScrollToTopArrow from '../../../components/ScrollToTopArrow';

const qft = () => {
    const sections = [
        {
            title: 'Classical Field Theory',
            subsections: [
                {
                    title: 'Introduction: Classical Field Theory',
                    content: `
                    Field is a function of space and time. Example: Electric field \\((\\vec{x}, t) \\to \\vec{E}(\\vec{x}, t)\\) and Magnetic Field \\((\\vec{x}, t) \\to \\vec{B}(\\vec{x}, t)\\) <br/>
                    <br/>
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
                        p^2 = m^2    \\tag{ "on shell" }
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
                    \\[
                        \\begin{align}
                            \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} &= \\frac{\\partial }{\\partial (\\partial_\\mu \\phi)} \\frac{1}{2} \\left(\\partial_\\alpha \\phi \\partial^\\alpha \\phi - m^2 \\phi^2 \\right) \\\\
                            &= \\frac{1}{2} \\frac{\\partial }{\\partial (\\partial_\\mu \\phi)} \\left(\\eta^{\\nu \\alpha} \\partial_\\alpha \\phi \\partial_\\nu \\phi \\right) - \\frac{1}{2} \\frac{\\partial }{\\partial (\\partial_\\mu \\phi)} \\left( m^2 \\phi^2 \\right) \\\\
                            &= \\frac{1}{2} \\eta^{\\nu \\alpha} \\left[\\partial_\\nu \\phi \\frac{\\partial \\partial_\\alpha \\phi}{\\partial (\\partial_\\mu \\phi)} + \\partial_\\alpha \\phi \\frac{\\partial \\partial_\\nu \\phi}{\\partial (\\partial_\\mu \\phi)} \\right] \\\\
                            &= \\frac{1}{2} \\eta^{\\nu \\alpha} \\left[\\partial_\\nu \\phi \\delta^\\mu_\\alpha + \\partial_\\alpha \\phi \\delta^\\mu_\\nu \\right] \\\\
                            &= \\frac{1}{2} \\eta^{\\nu \\mu} \\partial_\\nu \\phi + \\frac{1}{2} \\eta^{\\mu \\alpha} \\partial_\\alpha \\phi \\\\
                            &= \\frac{1}{2} \\partial^\\mu \\phi + \\frac{1}{2} \\partial^\\mu \\phi \\\\
                            &= \\partial^\\mu \\phi
                        \\end{align}
                    \\]
                    Thus, we have: \\(\\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right)\\) as \\(\\partial_\\mu \\partial^\\mu \\phi\\) and hence we have:
                    \\[
                        \\begin{align}
                            \\frac{\\partial \\mathcal{L}}{\\partial \\phi} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\phi)} \\right) &= 0\\\\ 
                            \\implies \\partial_\\mu \\partial^\\mu \\phi + m^2 \\phi &= 0 \\\\
                            \\implies (\\square + m^2) \\phi (x^\\mu) &= 0
                        \\end{align}
                    \\]
        
                    <div class='border-solid border-2 border-red-500/75 px-3 rounded mx-auto max-w-max'>
                        Warning: \\(\\eta = (-1,1,1,1)\\)
                        \\[
                            \\mathcal{L} = -\\frac{1}{2}\\partial_\\mu \\phi \\partial^\\mu \\phi - \\frac{1}{2} m^2 \\phi^2    
                        \\]
                    </div>
        
                    <br/>
                    <br/>
                    <p class='text-center text-xl text underline underline-offset-8 font-semibold text-white'>A Bit About: Tensor</p>
                    <br/>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2">
                        Tensor = Symmetric + Anti-Symmetric
                            \\[
                                \\begin{align}
                                B_{\\mu \\nu} &= \\frac{1}{2} (B_{\\mu \\nu} + B_{\\nu \\mu} - B_{\\nu \\mu} + B_{\\mu \\nu}) \\\\
                                              &= \\frac{1}{2} (B_{\\mu \\nu} + B_{\\nu \\mu}) + \\frac{1}{2} (B_{\\mu \\nu} - B_{\\nu \\mu}) \\\\
                                              &= S_{\\mu \\nu} + A_{\\mu \\nu}
                                \\end{align}
                            \\]
                            where \\(S_{\\mu \\nu}\\) is Symmetric and \\(A_{\\mu \\nu}\\) is Anti-Symmetric
                        </li>
                        <li class="mb-2">
                                \\( \\underbrace{A_{\\alpha \\beta \\gamma} B^{\\alpha \\beta \\gamma}}_{\\text{sum over all indices}} \\to \\) a scalar number
                        </li>
                        <li class="mb-2">
                                \\( A_{\\alpha \\beta \\gamma} S^{\\alpha \\beta \\delta} = X^\\delta_\\gamma \\)
                                <br/>
                                Statement: wrt. \\( \\alpha, \\beta \\): \\( S \\to \\text{symmetric}, A \\to \\text{anti-symmetric} \\). Thus,
                                \\[
                                    \\begin{align}
                                    A_{\\alpha \\beta \\gamma} S^{\\alpha \\beta \\delta} &= - A_{\\beta \\alpha \\gamma} S^{\\alpha \\beta \\delta}\\\\
                                            &= - A_{\\beta \\alpha \\gamma} S^{\\beta \\alpha \\delta}\\\\
                                            &= - A_{\\alpha \\beta \\gamma} S^{\\beta \\alpha \\delta} \\\\
                                            &(\\ldots{} \\text{ } \\alpha, \\beta \\text{ are running indices}) \\\\
                                            \\implies A_{\\alpha \\beta \\gamma} S^{\\alpha \\beta \\delta} &= 0    
                                    \\end{align}
                                \\]
                        </li>
                    </ul>
                    <br/>
                    <p class='text-center text-xl text underline underline-offset-8 font-semibold text-white'>Maxwell's Equation</p>
                    \\begin{align}
                        \\mathcal{L} &= -\\frac{1}{4} F_{\\mu \\nu} F^{\\mu \\nu} - j_\\mu A^\\mu \\\\
                    \\end{align}
                    where \\(j_\\mu\\) is the current density, \\(F_{\\mu \\nu} = \\partial_\\mu A_\\nu - \\partial_\\nu A_\\mu\\) and \\( A^\\mu = (\\phi, \\vec{A}) \\). Note that \\( F_{\\mu \\nu} \\) is anti-symmetric. <br/>
                    <ul class='list-disc ml-8 my-4'>
                        <li class="mb-2">
                            \\(A^\\mu (x^\\mu) \\stackrel{\\text{Lorentz}}{\\underset{\\text{Transformation}}{---->}} A'^\\mu (x^\\mu) = \\Lambda^\\mu_\\nu A^\\mu (x^\\mu)\\)
                        </li>
                    </ul>
                    <br/>
                    Now let's solve this equation:
                    \\begin{align}
                        \\mathcal{L} &= \\underbrace{-\\frac{1}{4} F_{\\alpha \\beta} F^{\\alpha \\beta}}_{\\text{Free Lagrangian}} - \\underbrace{j_\\alpha A^\\alpha}_{\\text{source term } \\equiv \\text{ qE}} \\\\
                        &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} F_{\\alpha \\beta} F_{\\rho \\sigma} - j_\\alpha A^\\alpha \\\\
                    \\end{align}
                    Euler - Lagrange Equation of motion is:
                    \\[
                        \\frac{\\partial \\mathcal{L}}{\\partial A_\\nu} - \\partial_\\mu \\left( \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu A_\\nu)} \\right) = 0
                    \\]
                    Now,
                    \\begin{align}
                        \\frac{\\partial \\mathcal{L}}{\\partial A_\\nu} &= - \\frac{\\partial j_\\alpha A^\\alpha}{\\partial A_\\nu}\\\\
                        &= - j_\\alpha \\eta^{\\alpha \\gamma} \\frac{\\partial A_\\gamma}{\\partial A_\\nu}\\\\
                        &= -j_\\alpha \\eta^{\\alpha \\gamma} \\delta^\\nu_\\gamma\\\\
                        &= -j^\\nu
                    \\end{align}
                    and,
                    \\begin{align}
                    \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu A_\\nu)} &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} \\left[ \\frac{\\partial F_{\\alpha \\beta}}{\\partial (\\partial_\\mu A_\\nu)} F_{\\rho \\sigma} + \\frac{\\partial F_{\\rho \\sigma}}{\\partial (\\partial_\\mu A_\\nu)} F_{\\alpha \\beta} \\right] \\\\
                    &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} \\left[ \\frac{\\partial (\\partial_\\alpha A_\\beta - \\partial_\\beta A_\\alpha}{\\partial (\\partial_\\mu A_\\nu)} F_{\\rho \\sigma} + \\frac{\\partial (\\partial_\\rho A_\\sigma - \\partial_\\sigma A_\\rho)}{\\partial (\\partial_\\mu A_\\nu)} F_{\\alpha \\beta} \\right] \\\\
                    &= -\\frac{1}{4} \\eta^{\\alpha \\rho} \\eta^{\\beta \\sigma} \\left[ (\\delta^\\mu_\\alpha \\delta^\\nu_\\beta - \\delta^\\mu_\\beta \\delta^\\nu_\\alpha) F_{\\rho \\sigma} + (\\delta^\\mu_\\rho \\delta^\\nu_\\sigma - \\delta^\\mu_\\sigma \\delta^\\nu_\\rho) F_{\\alpha \\beta} \\right] \\\\
                    &= -\\frac{1}{4} \\left[ (\\delta^\\mu_\\rho \\delta^\\nu_\\sigma - \\delta^\\mu_\\sigma \\delta^\\nu_\\rho) F_{\\rho \\sigma} + (\\delta^\\mu_\\alpha \\delta^\\nu_\\beta - \\delta^\\mu_\\beta \\delta^\\nu_\\alpha) F_{\\alpha \\beta} \\right]\\\\
                    &= -\\frac{1}{4} \\left[ (F_{\\mu \\nu} - F_{\\nu \\mu}) + (F_{\\mu \\nu} - F_{\\nu \\mu}) \\right]\\\\
                    &= -\\frac{1}{4} \\left[ (F_{\\mu \\nu} + F_{\\mu \\nu}) + (F_{\\mu \\nu} + F_{\\mu \\nu}) \\right] *\\\\
                    &= - F_{\\mu \\nu}
                    \\end{align}
                    Thus, we have our Euler - Lagrange Equation of motion as:
                    <br/>
                    <br/>
                    <div class='border-solid border-2 border-blue-500/75 px-3 rounded mx-auto max-w-max'>
                        \\[
                            \\partial_\\mu F^{\\mu \\nu} = j^\\nu 
                        \\]
                    </div>
                    `,
                },
                {
                    title: 'Hamiltonian Formalism',
                    content: `
                        We know from Classical Mechanics that:
                        \\[
                            \\begin{align}
                                p &= \\frac{\\partial }{\\partial \\dot{q}} L (q, \\dot{q})\\\\
                                H(q,p) &= \\dot{q}_r p_r - L
                            \\end{align}    
                        \\]
                        and we also know that:
                        \\[
                            \\begin{align}
                                \\frac{\\partial H}{\\partial p} &= \\dot{q} \\\\
                                \\frac{\\partial H}{\\partial q} &= -\\dot{p}
                            \\end{align}    
                        \\]
                        Poisson bracket gives us:
                        \\[
                            \\begin{align}
                                [f_1, f_2]_p &= \\frac{\\partial f_1}{\\partial q_r} \\frac{\\partial f_2}{\\partial p_r} - \\frac{\\partial f_1}{\\partial p_r} \\frac{\\partial f_2}{\\partial q_r} \\\\
                                [q_r, p_s] &= \\delta_{rs} \\\\
                                \\dot{q} &= [q,H]_p\\\\
                                \\dot{p} &= [p,H]_p\\\\
                                \\dot{f} &= \\frac{df}{dt} = \\frac{\\partial f}{\\partial t} + [f,H]_p
                            \\end{align}    
                        \\]
                        Now, let's look into the Hamiltonian Formalism of Field Theory, where we define \\(\\Pi_A\\) which is the canonical momenta, as
                        \\[
                            \\Pi_A = \\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\phi_A}}
                        \\]
                        and let's look at:
                        \\[
                            \\begin{align}
                            \\frac{\\delta \\dot{\\phi^B} (t, \\vec{y})}{\\delta \\dot{\\phi^A} (t, \\vec{x})} &= \\delta_A^B \\delta^3 (\\vec{x} - \\vec{y})\\\\
                            \\frac{\\delta \\phi^B (t, \\vec{y})}{\\delta \\dot{\\phi^A} (t, \\vec{x})} &= 0
                            \\end{align}\\\\ 
                        \\]
                        \\[
                            H = \\Pi_A \\dot{\\phi^A} - \\mathcal{L}    
                        \\]
                    `,
                },
                {
                    title: 'Symmetries',
                    content: `

                    `,
                },
            ]
        },
        {
            title: 'Free Fields',
            subsections: [
                {
                    title: 'Introduction: Quantum Field Theory',
                    content: `1. Quantum Field Theory is a theory of fields. <br/>`,
                },
                {
                    title: 'Quantum Mechanics',
                    content: `1. Quantum Mechanics is a theory of particles. <br/>`,
                }
            ]
        }
    ];

    return (
        <div className="relative h-full">
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h1 className="text-2xl font-semibold text-center font-mono justify-center text-accent mb-4">Quantum Field Theory</h1>
                        {sections.map((section, index) => (
                            <ExpandableSection key={index} title={`${index + 1}. ${section.title}`}>
                                {section.subsections.map((subsection, subIndex) => (
                                    <Subsection
                                        key={subIndex}
                                        title={`${index + 1}.${subIndex + 1} ${subsection.title}`}
                                    >
                                        <MathJaxWrapper content={subsection.content} />
                                    </Subsection>
                                ))}
                            </ExpandableSection>
                        ))}
                    </div>
                </SimpleBar>
                {/* <ScrollToTopArrow /> */}
            </div>
        </div>
    );
};

const ExpandableSection = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="mb-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
                <div
                    className={`ml-2 transition-transform transform ${expanded ? 'rotate-[-90deg]' : 'rotate-0'
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

const Subsection = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`mb-2 pl-3`}>
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setExpanded(!expanded)}
            >
                <h3 className="text-md font-semibold">{title}</h3>
                <div
                    className={`ml-6 transition-transform transform ${expanded ? 'rotate-[-90deg]' : 'rotate-0'
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
            {expanded && <div className="mt-1">{children}</div>}
        </div>
    );
};

export default qft;
