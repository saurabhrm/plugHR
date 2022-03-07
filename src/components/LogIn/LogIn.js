import React from 'react';

import './LogIn.css'
import PageSub1 from './PageSub1';
import Page2 from './Page2';
import Page3 from './Page3';



function LogIn() {

  

  return <div className='data'>
      <div className='headP1'>
      <h1>Make human resources</h1>
      <h1>your strength</h1>
      </div>
      <br/>
      <div className='subP1'>
        <p>Automate HR in minutes, let plugHR consultant work
          <br/>
        with you to create an awesome workplace
        </p>
       
      </div>
      
        <PageSub1/>
        <Page2/>
        <Page3/>
        
  </div>;
}

export default LogIn;
