"use client"
import React, { useEffect, useState } from 'react';
import Framework from './components/Framework';
import VoiceTone from './components/VoiceTone';
import Logo from './components/Logo';
import Typography from './components/Typography';
import Iconography from './components/Iconography';
import Color from './components/Color';
import DropboxIcon from './components/DropboxIcon';
import Imagery from './components/Imagery';
import Motion from './components/Motion';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check device width on mount and on resize
    const checkDevice = () => setIsDesktop(window.innerWidth >= 1024);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isDesktop) {
    // Desktop layout (your current layout)
    return (
      <main className="min-h-screen bg-white p-4">
        <div className="flex flex-wrap justify-start gap-4">
          {/* First row components: 1–4 */}
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <Framework />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <VoiceTone />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <Logo />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <Typography />
          </div>
          {/* Second row components: 5–8 */}
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <Iconography />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[23%] relative">
            <Color />
            <div className="absolute bottom-2 right-2">
              <DropboxIcon />
            </div>
          </div>
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <Imagery />
          </div>
          <div className="w-full sm:w-[48%] lg:w-[23%]">
            <Motion />
          </div>
        </div>
      </main>
    );
  } else {
    // Mobile/tablet layout: first row is two columns, rest are stacked
    return (
      <main className="min-h-screen bg-white ">
        {/* First row: two columns */}
        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <Framework width="100%" height="30vh" svgWidth="90%" svgHeight="20vh" />
          </div>
          <div className="w-1/2">
            <VoiceTone width="100%" height="30vh" />
          </div>
        </div>
        <div className='flex gap-4 mb-4'>
        {/* Stack the rest */}
        <div className="w-1/2 mx-[0] mb-4">
          <Logo width="110%" height="20vh" />
        </div>
        <div className="w-1/2 ml-[4vw] mb-4">
          <Typography width="80%" height="35vh" />
        </div>
        </div>
 <div className='flex gap-4 mt-[20vh] mb-4'>
        <div className="w-1/2 mt-[-77vw] mb-4">
          <Iconography width="100%" height="30vh"  />
        </div>
        
        <div className="w-1/2 mt-[-1rem] mb-4 relative">
          <Color width="100%" height="20vh"  />
            </div>
            </div>

             <div className='flex gap-4 mb-4'>
          {/* <div className="absolute bottom-2 right-2">
            <DropboxIcon />
          </div> */}
      
        <div className="w-1/2 mt-[-8vh] mb-4">
          <Imagery width="100%" height="20vh"  />
        </div>
       
        <div className="w-1/2 mt-[17vh] mb-4">
          <Motion width="90%" height="20vh"  />
        </div>
        
        </div>
      </main>
    );
  }
}