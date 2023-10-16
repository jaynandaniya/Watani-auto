import React from 'react'
import './Logoslider.css'
// import '../assets/logo/SuzukiLogo.svg'

function Logoslider() {
    return (
        <div className="grad">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-around logos py-2">
                            <a href="#"><img src={require('../assets/logo/HyundaiLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/MgLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/GacLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/KiaLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/IsuzuLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/ChangangLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/SuzukiLogo.svg').default} alt="logo" /></a>
                            <a href="#"><img src={require('../assets/logo/CherryLogo.svg').default} alt="logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logoslider;


