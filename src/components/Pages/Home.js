import {GiPlainCircle} from "react-icons/gi";
import"./Home.css"

import React from 'react'

function Home() {
  const d = new Date()
  const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const day = weekDay[d.getDay()]
  return (
    <div className="home">
<div className='headTitle'>
     <h1>Happy {day}</h1>

     <h5 >For Surge cycle 2nd Mar 2022 to 8th Mar 2022</h5>
     <h6>You are chasing 0 goals</h6>
     <h6>
       <span className='p-link text-primary'>
       1 members</span>
       &nbsp; have no goals assigned yet
       </h6>
       
       </div>
      
      <div className="mt-4 d-flex flex-column flex-md-row justify-content-between align-items-center circlepie">  
      
    <div className='mt-3 mt-md-0'>

          <div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
                  
      <GiPlainCircle style={{
      
      color: '#e4e6eb',
      height:'10em',
      width:"10em",
    }}/>
                  
       <div>
                               
                               <span className='text-underline-hover number'>0</span>
                               
                               
                          </div>
                          <div className="text-center text-underline-hover workTitle">
                          Assigned
                          </div>          
                  </div>

                  </div>

                  <div className='mt-3 mt-md-0'>

          <div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
                  
          <GiPlainCircle style={{
      
      color: '#dfe8f4',
      height:'10em',
      width:"10em",
    }}/>
                  
       <div>
                               
                               <span className='text-underline-hover number'>0</span>
                               
                               
                          </div>
                          <div className="text-center text-underline-hover workTitle">
                          Executing
                          </div>          
                  </div>

                  </div>

                  <div className='mt-3 mt-md-0'>

          <div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
                  
          <GiPlainCircle style={{
      
      color: '#dc3545',
      height:'10em',
      width:"10em",
    }}/>
                  
       <div >
                               
                               <span className='text-underline-hover number'>0</span>
                               
                               
                          </div>
                          <div className="text-center text-underline-hover workTitle">
                          Need help
                          </div>          
                  </div>

                  </div>

                  <div className='mt-3 mt-md-0'>

<div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
        
<GiPlainCircle style={{
      
      color: '#7ec334',
      height:'10em',
      width:"10em",
    }}/>
        
<div >
                     
                     <span className='text-underline-hover number'>0</span>
                     
                     
                </div>
                <div className="text-center text-underline-hover workTitle">
                Complete
                </div>          
        </div>

        </div>
                  </div>

                  <div className='col-lg-9 mt-5 last'>
                    <h5 className='mt-3' style={{fontWeight: '18px'}}>Did someone impress you last surge cycle ? </h5>
                  </div>

    </div>
  )
}

export default Home

