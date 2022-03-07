
import './App.css';
import LogIn from './components/LogIn/LogIn';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DashBoard from './components/Home/DashBoard';


import NavBar from './components/LogIn/NavBar/NavBar';

import Home from './components/Pages/Home';
import Goals from './components/Pages/Goals';
import Achievement from './components/Pages/Achievement';
import Report from './components/Pages/Report';
import Help from './components/Pages/Help';
import Sidebar from './components/Home/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
    
     <Router>
       <NavBar/>
       <Sidebar>
       <Routes>
       
         <Route index element={<LogIn/>}/>
         <Route path="/dashboard" element={<DashBoard/>}/>
         
         <Route path="/dashboard/home" element={<Home/>}/>
         <Route path="/dashboard/goals" element={<Goals/>}/>
         <Route path="/dashboard/achievement" element={<Achievement/>}/>
         <Route path="/dashboard/report" element={<Report/>}/>
         <Route path="/dashboard/help" element={<Help/>}/>
        
         
       </Routes>
       </Sidebar>
      
     </Router>
    
        </div>
  );
}

export default App;
