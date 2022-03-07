import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import { useLocation } from 'react-router-dom';







export default function NavBar() {
  const[show,setShow]=React.useState(true)
  const location = useLocation()

  React.useEffect(() => {
    // runs on location, i.e. route, change
    console.log('handle route change here', location)
    if(location.pathname==='/dashboard'){
      setShow(true)
    }else if(location.pathname==='/dashboard/home' ) {
      setShow(true)
    }
    else if(location.pathname==='/dashboard/goals' ) {
      setShow(true)
    }
    else if(location.pathname==='/dashboard/achievement' ) {
      setShow(true)
    }
    else if(location.pathname==='/dashboard/report' ) {
      setShow(true)
    }
    else if(location.pathname==='/dashboard/help' ) {
      setShow(true)
    }else{setShow(false)}
  }, [location])
  return <div >
    
      <Navbar bg="light"  className='navbar fixed-top navbar-light bg-light shadow-sm p-3 mb-5 bg-body rounded'>
   
      <Navbar.Brand href="">
    <img src='/logo.png' className='app-logo 'alt='logo'/>
      
        
      </Navbar.Brand>
      {show?   <div className='d-flex logi'>
          <i className="fa-regular fa-bell bell"></i>
          <i className="fa-regular fa-circle-user user"></i>
          </div> :null}
         
     
    
    
  </Navbar>
  
  </div>;
}





