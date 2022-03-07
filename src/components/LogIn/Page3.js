import React from 'react'
import './Page3.css'



function Page3() {
  return (
    <div className='page3'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-10'></div>
                <div className='head3'>
                How plugHR works
                </div>
                
                <div className='d-flex justify-content-between align-items-center align-items-lg-start flex-column flex-md-row mt-5'>
                    <div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
                  
                    <img src="circle-solid.jpg" className='circle' alt="" />
                    
                            <h4 className='info info1'>
                                 We&nbsp;
                                <span className='border-bottom-primary'>build</span>
                                &nbsp;HR 
                            </h4>
                    </div>

                    <div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
                    
                    <img src="circle-solid.jpg" className='circle c1' alt="" />
                    
                            <h4 className='info'>
                                 We&nbsp;
                                <span className='border-bottom-primary'> automate </span>
                                &nbsp;HR 
                            </h4>
                    </div>

                    <div className='how-components d-flex flex-column justify-content-center align-items-start mt-3 mt-md-0'>
                  
                    <img src="circle-solid.jpg" className='circle c3' alt="" />
                    
                            <h4 className='info'>
                                 We &nbsp;
                                 <span className='border-bottom-primary'>hire HR</span>
                                 &nbsp;
                                 team
                            </h4>
                    </div>
                   
                    <button className='btnP3 btn-primary mt-5'>REQUEST TRIAL ACCOUNT</button>
                    <div>
                    

                   </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Page3