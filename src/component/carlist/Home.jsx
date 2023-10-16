import React from 'react';
import './Home.css';

function Home() {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="homeimage d-flex justify-content-center py-5">
                                <img src={require('../assets/logo/Changan_Automobile_HomeLogo.png')} alt="logo" /> <img src={require('../assets/logo/pipe-4-32.png')} alt="logo" /> <h2>CS85</h2>
                            </div>
                            <div className="vr-btn d-flex justify-content-center ">
                                <a href="#" className="blur">View Details</a>
                                <a href="#" className="blur">Reserve Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home