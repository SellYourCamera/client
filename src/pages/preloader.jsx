import React, { useEffect } from 'react';
import './preloader.css';

const Preloader = () => {
  useEffect(() => {
    document.title += ' (OGBZ)';
  }, []);

  return (
   <div className='prelaoderbody'>
     <div className="preloader-container">
      <svg height="90" width="180" viewBox="-20 -20 240 240">
        <path className="ring left1" d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0" fill="none" />
        <path className="ring right1" d="M100,0 a100,100 0 0 1 0,200 a100,100 0 0 1 0,-200,0" />
      </svg>
    </div>
   </div>
  );
};

export default Preloader;
