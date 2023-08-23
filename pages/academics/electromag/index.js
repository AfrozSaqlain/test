import React, { useState } from 'react';
import MathJaxWrapper from '../../../components/MathJaxWrapper';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const electromag = () => {
    const sections = [
        {
            title: 'Specific Intensity',
            subsections: [
                {
                    title: 'Introduction',
                    content: 'This is the introduction to specific intensity...',
                },
                {
                    title: 'Equations',
                    content: 'Here are the equations related to specific intensity...',
                },
                // Add more subsections
            ],
        },
        {
            title: 'Total Flux',
            subsections: [
                {
                    title: 'Definition',
                    content: 'The definition of total flux...',
                },
                {
                    title: 'Calculation',
                    content: 'How to calculate the total flux...',
                },
                // Add more subsections
            ],
        },
        // Add more sections
    ];

    return (
        <div className="relative h-full">
            <div className="h-full translate-y-10 overflow-y-auto overflow-visible overscroll-y-auto pb-24 pt-4">
                <SimpleBar forceVisible="y" autoHide={true} className='overflow-visible overscroll-y-auto h-full'>
                    <div className="max-w-4xl mx-auto mb-12 p-4 shadow-2xl rounded-lg">
                        <h1 className="text-2xl font-semibold text-center font-mono justify-center text-accent mb-4">Electricity and Magnetism</h1>
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

export default electromag;
