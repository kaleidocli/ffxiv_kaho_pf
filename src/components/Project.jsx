import React, { useState } from 'react';
import projects from '../projectData';
import { GITHUB_USERNAME } from '../root.link';

const Project = () => {
    const [chosenIndex, setChosenIndex] = useState(-1);

  return (
    <div id="Projects">
        <section id='projects' className='my-28 px-5'>
            <header className='text-5xl font-bold pt-10 border-b-2 border-gray-300 pb-3'>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Gallery</h1>
            </header>
            <div className='my-7 space-y-24'>
                {projects.map((project, index) => (
                    <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
                    <picture
                            className={
                                chosenIndex === index
                                    // Classes for the ZOOMED IN state (full-screen overlay)
                                    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out'
                                    // Classes for the NORMAL state
                                    : `${index % 2 === 0 ? 'w-full md:w-6/12' : 'w-full md:w-6/12 md:order-1'} shadow-lg cursor-zoom-in`
                            }
                            onClick={() => chosenIndex === -1 ? setChosenIndex(index) : setChosenIndex(-1)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={
                                    chosenIndex === index
                                        // Classes for the IMAGE when it's zoomed in
                                        ? 'object-contain w-auto h-auto max-w-[95%] max-h-[95%]'
                                        // Classes for the IMAGE in its normal state
                                        : 'w-full h-auto' // Using h-auto to maintain aspect ratio
                                }
                            />
                        </picture>
                        <div className='
                                flex flex-col space-y-2 my-3 mx-1 w-full md:w-5/12
                                cd-timeline-content
                                '>
                            <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    </div>
  );
};

export default Project;
