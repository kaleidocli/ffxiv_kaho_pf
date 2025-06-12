import { RESUME_PATH } from '../root.link';

const Header = () => {
  return (
      // 1. Change width to height, set a fixed width, and position top-left
      <nav className='fixed top-0 left-0 h-screen w-32 bg-black/50 backdrop-blur-sm z-50
                   flex flex-col justify-center items-center'>

        {/* 2. Change flex direction to column and adjust spacing */}
        <ul className='flex flex-col space-y-2 text-xl text-center w-full'>
          <li>
            <a href='#Hero' className='block py-3 px-4 hover:bg-gray-700 focus:bg-gray-700 rounded-lg'>
              Home
            </a>
          </li>
          <li>
            <a href='#Experience' className='block py-3 px-4 hover:bg-gray-700 focus:bg-gray-700 rounded-lg'>
              Experience
            </a>
          </li>
          <li>
            <a href='#Projects' className='block py-3 px-4 hover:bg-gray-700 focus:bg-gray-700 rounded-lg'>
              Gallery
            </a>
          </li>

          {/*<li>*/}
          {/*  <a href={RESUME_PATH} target='_blank' rel='noreferrer'*/}
          {/*     className='py-2 px-4 hover:bg-gray-700 focus:bg-gray-700 rounded-lg'>*/}
          {/*    Resume*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </nav>
  );
};

export default Header;
