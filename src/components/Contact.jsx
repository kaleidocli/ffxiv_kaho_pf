import React from 'react';
import { ADDRESS, EMAIL_ID, FIRST_NAME, GITHUB_USERNAME, LAST_NAME, LINKEDIN_USERNAME, RESUME_PATH, DISCORD_TAG } from '../root.link'
const Contact = () => {
  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact</h2>
        <p className='text-base font-thin'>(Plugin? Please reach me at Dalamud's official Discord forum)</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>{FIRST_NAME} {LAST_NAME}</p>
            <p className='font-thin'>{ADDRESS}</p>
          </div>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='/images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  {GITHUB_USERNAME}
                </span>
              </a>
            </div>

            <a href={`https://discord.com/`} target='_blank' rel='noreferrer'>
              <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                <img src='/images/icons/discord.svg' alt='' width='24px' height='24px' className='mr-1' />
                @{DISCORD_TAG}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
