import { lazy, Suspense, useState, useCallback } from 'react';

const Header = lazy(() => import('./components/Header.jsx'));
const Hero = lazy(() => import('./components/Hero.jsx'));
const Project = lazy(() => import('./components/Project.jsx'));
const Skill = lazy(() => import('./components/Skill.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'))
const Outside = lazy(() => import('./components/Outside.jsx'));

// Define our sections and their corresponding background classes
const sections = [
    { Compo: Hero, bgClass: 'bg-kc_banner_no_text' },
    { Compo: Experience, bgClass: 'bg-kc_banner_no_text' },
    { Compo: Project, bgClass: 'bg-kc_banner_with_text' },
    { Compo: Outside, bgClass: 'bg-kc_banner_with_text' },
    { Compo: Contact, bgClass: 'bg-kc_banner_with_text' },
];


function App() {
    // State to hold the current background class
    const [backgroundClass, setBackgroundClass] = useState('bg-kc_banner_no_text');

    // A memoized callback function to update the background state
    const handleSectionInView = useCallback((newClass) => {
        setBackgroundClass(newClass);
    }, []);

    return (
        <Suspense
            fallback={
                <div className='sk-folding-cube'>
                    <div className='sk-cube1 sk-cube'></div>
                    <div className='sk-cube2 sk-cube'></div>
                    <div className='sk-cube4 sk-cube'></div>
                    <div className='sk-cube3 sk-cube'></div>
                </div>
            }
        >
            {/*
            The background class is now dynamic.
          */}
            <div
                className={`bg-fixed bg-no-repeat bg-[length:auto_100%]
                    ${backgroundClass === 'bg-kc_banner_with_text' ? 'bg-right-bottom' : 'bg-right-bottom'} 
                    transition-all duration-400 ${backgroundClass} bg-jade`}
            >
                <div className="App container mx-48 max-w-screen-lg">
                    <Header />
                    <main className="flex flex-col">
                        {/* Map over the sections array to render each component */}
                        {sections.map(({ Compo, bgClass }, index) => (
                            <Compo
                                key={index}
                                onInView={handleSectionInView}
                                bgClass={bgClass}
                            />
                        ))}
                    </main>
                </div>
            </div>
        </Suspense>
    );
}

export default App;
