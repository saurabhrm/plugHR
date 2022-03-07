import React, {useState} from 'react'
import {AnimatePresence ,motion} from "framer-motion"
import { NavLink } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa';

import SidebarMenu from './SidebarMenu';
import { useLocation } from 'react-router-dom';
import "./Sidebar.css"




const routes = [
    {
        path:"/dashboard/home",
        name:'Home',
    },
    {
        path:'',
        name:"Surge cycle",
        subRoutes:[
            {
            path:'/dashboard/goals',
            name:"Goals", 
        },
        {
            path:'/dashboard/achievement',
            name:"Achievement",  
        },{
            path:'/dashboard/report',
            name:"Report", 
        },
    ],
    },
    {
        path:'/dashboard/help',
        name:"Help",
    }
]

const Sidebar = ({children}) => {

    const[show,setShow]=React.useState(true)
  const location = useLocation()

  React.useEffect(() => {
    // runs on location, i.e. route, change
    console.log('handle route change here', location)
    if(location.pathname==='/dashboard/home' ) {
      setShow(true)
    } 
    else if(location.pathname==='/dashboard/home' ) {
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
      }
      else {setShow(false)}
  }, [location])

    const [isOpen] = useState(true)

    // const toggle = () => setIsOpen(!isOpen)

    
    const showAnimation = {
        hidden:{
            width:0,
            opacity:0, 
            transition:{
                duration:0.5,
                
            },
        },
        show:{
           width:"auto",
           
           opacity:1, 
           transition:{
               duration:0.2,
               
           },
        },
    };


    


  return (
    <div className='main-container'>
       {show? <motion.div animate={{width:  "200px"}} className='sidebar shadow   bg-body rounded'>

           <div className="top_section">
               
               <div className="bars">
                   {/* <FaBars onClick={toggle}/> */}
                   </div>
           </div>

   


    <section className='routes'>
        {routes.map((route, index)=>{
            if(route.subRoutes){
             return(
                 <SidebarMenu showAnimation={showAnimation} isOpen={isOpen} route={route} key={route.name}
                 />
             )
            }
            return(
          <NavLink  to={route.path} key={route.name} className="link" >
            <AnimatePresence>
            {isOpen && (
            <motion.div variants={showAnimation} initial="hidden" animate ="show" exit="hidden" className='link_text '>
                 {route.name}
             </motion.div>
             )}
            </AnimatePresence>
          </NavLink>
        )})}
    </section>

        </motion.div>:null}
        <main>
            {children}
        </main>
    </div>
  )
}

export default Sidebar