import React from 'react'
import Homenavbar from './Homenavbar';
import Logoslider from './Logoslider';
import './Landingpage.css';
import Home from './Home';

function Landingpage() {
  return (
    <div className="landigepageBG">
        <Homenavbar />
        <Logoslider />
        <Home />
        
        
        
    </div>
  )
}
  
export default Landingpage;