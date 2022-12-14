import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mr Bun</title>
        <meta name="description" content="Mr Bun!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="scroll-smooth bg-deep-blue min-h-screen font-flower antialiased">
        <div className="max-w-6xl mx-auto flex justify-center flex-col items-center md:flex-row md:justify-between">
          <img src="/logo.png" className="clicky" width="400" />

          <nav className="flex justify-center md:mr-10">
            <a
              className="inline-block group"
              href="https://www.instagram.com/mrbunandangel/"
            >
              <span className="text-yellow font-bold inline-block underline group-hover:rotate-6">
                TAKE ME TO THE PHOTOS!
              </span>
            </a>
          </nav>
        </div>

        <div className="max-w-6xl mx-auto py-10 lg:pt-24 min-h-800 relative text-aqua font-hand">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative">
              <img
                src="/retro-bun.png"
                className="clicky"
                width="700"
                height="700"
              />
              <div
                className="items-center absolute hidden top-16 md:left-0 md:flex"
                style={{ transform: 'rotate(10deg)' }}
              >
                <p>That&apos;s me!</p>
                <svg
                  className="ml-3 relative"
                  style={{ top: '2px', transform: 'rotate(9deg)' }}
                  xmlns="http://www.w3.org/2000/svg"
                  height="10"
                  width="70"
                  viewBox="0 0 123.85 12.57"
                >
                  <path
                    d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="pl-6 pt-12">
              <h1 className="text-4xl md:text-6xl font-display text-yellow leading-none mb-8">
                I&apos;m Mr Bun and I like eating kale and&nbsp;BANANAS!.
              </h1>
              <p className="text-3xl font-hand text-aqua max-w-md leading-tight">
                I built this website because I think you should all be able to
                see photos of me, I&apos;m just that cute
              </p>
            </div>
          </div>
          <div
            className="items-center absolute hidden lg:flex top-[174px] left-[300px]"
            style={{ transform: 'rotate(10deg)' }}
          >
            <svg
              className="ml-3 -scale-x-1 lg:-rotate-45 -scale-y-100 lg:scale-y-100 lg:top-[30px] transform relative"
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="70"
              viewBox="0 0 123.85 12.57"
            >
              <path
                d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
                fill="currentColor"
              ></path>
              <path
                d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
                fill="currentColor"
              ></path>
              <path
                d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="w-40 leading-none">
              Sometimes I like to sleep a lot as well
            </p>
          </div>
          <div
            className="items-center absolute hidden lg:flex"
            style={{
              left: '200px',
              top: '500px',
              transform: 'rotate(-6deg)',
            }}
          >
            <svg
              className="ml-3 -scale-x-1 -scale-y-1 rotate-45 transform relative"
              style={{ top: '-30px', left: '-10px' }}
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="70"
              viewBox="0 0 123.85 12.57"
            >
              <path
                d="M60.09.07A261.23,261.23,0,0,0,15.3,5.13C11.35,6.6,1.76,6.93,0,10.5a1.11,1.11,0,0,0,1.36.77C10.8,7.86,20.79,6.15,30.7,4.76l-.3,0c24.23-3.16,49-3.54,73.16.35a154,154,0,0,1,18.85,4.33,1.15,1.15,0,0,0,1.4-.79c-1.66-3.57-13-4.09-17.11-5.53C91.32.38,75.69-.23,60.09.07Z"
                fill="currentColor"
              ></path>
              <path
                d="M109.1.57c-.73,3.33,8.28,4.55,10.41,7.11,1.67,2.26,5.58,2.91,3.95-.75-2.7-2.34-11.21-8.29-14.36-6.36Z"
                fill="currentColor"
              ></path>
              <path
                d="M121.27,6.28C118,7.8,107,7,107.16,11.28c2.2,3.51,11.31-1.23,15.17-1.16,2.49-.63,1.42-4.57-1.06-3.84Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="w-40 leading-none">
              Sometimes I also cuddle with my owner, but only sometimes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
