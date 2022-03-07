import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import {FaAngleDown} from "react-icons/fa";
import { NavLink} from 'react-router-dom';

const SidebarMenu = ({showAnimation, route, isOpen}) => {



    const menuAnimation = {
        hidden:{
            height:0,
            opacity:0, 
            transition:{
                duration:0.5,
                
            },
        },
        show:{
           
           height:"Auto",
           opacity:1, 
           transition:{
               duration:0.2,
               
           },
        },
    };

    const menuItemAnimation ={
        hidden:{
            padding:0,
            x:'-100%', 
            transition:{
                duration:0.1,
                
            },
        },
        show:{
            x:0, 
            transition:{
                duration:0.1,
           
        },
    }
    };

    const[isMenuOpen,SetisMenuOpen]= useState(false);

    const toggleMenu = () => SetisMenuOpen(!isMenuOpen)

  return ( 
      <>
    <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
            <div className="icon">{route.icon}</div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                    variants={menuAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text">
                        {route.name}
                    </motion.div>
                    
                )}
            </AnimatePresence>
        </div>
        <motion.div animate={isMenuOpen ? {rotate:-180} : {rotate:0}}>
            <FaAngleDown/>
        </motion.div>
        
    </div>
    <AnimatePresence>
    {isMenuOpen && (<motion.div variants ={menuAnimation}
    initial="hidden" 
    animate ="show" 
    exit="hidden"
    className="menu_container">
        {route.subRoutes.map((subRoute, i) => (
         
         <motion.div variants={menuItemAnimation} key={i} >
              <NavLink 
          
          to={subRoute.path} 
         
          className="link"
           >
          <AnimatePresence>
          {isOpen && (
          <motion.div 
          variants={showAnimation} 
          
          className='link_text '
          >
               {subRoute.name}
           </motion.div>
           )}
          </AnimatePresence>
        </NavLink>  
        </motion.div>

))}
</motion.div>)}
    </AnimatePresence>
    </>
  )
}

export default SidebarMenu