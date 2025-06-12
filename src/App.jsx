import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header.jsx'));
const Hero = lazy(() => import('./components/Hero.jsx'));
const Project = lazy(() => import('./components/Project.jsx'));
const Skill = lazy(() => import('./components/Skill.jsx'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience.jsx'))
function App() {
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
          <div className="bg-fixed bg-no-repeat bg-contain bg-right-bottom bg-kc_banner_with_text bg-jade">
              <div className="App container mx-48 max-w-screen-lg">
                  <Header/>
                  <main className="flex flex-col">
                      <Hero/>
                      <Experience/>
                      <Project/>
                      {/*<Skill />*/}
                      {/*<Contact />*/}
                  </main>
              </div>
          </div>
      </Suspense>
);
}

export default App;
