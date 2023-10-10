import FooterButton from '../Footer/FooterButton'
// import LandingPage from '../carlist/LandingPage'

function Loginform() {
    return (
        <div >
           <div className="container">
             <div className="row  py-5 ">
              <div className="col-md-8 my-5">
                <span></span>
              </div>
              <div className="col-md-4 my-5  blur">
                    <div class=" login-container ">
                        <h2 class="text-left  pt-5 px-4">Welcome !</h2>
                        <div className="p-4">
                        <form className="text-center ">
                            <div class="mb-3 form-input">
                                <input type="email"  id="email" aria-describedby="emailHelp" placeholder="Email*" />
                            </div>
                            <div class="mb-3 form-input">
                                <input type="password"  id="password" placeholder="Password*" />
                            </div >
                            <div className="forgett-psw mb-3"><a href=""> Forget Password?</a></div>
                            <div className="py-2 my-2"><span></span></div>
                            <div className="login-btn my-4 "> <a href="#">Login</a></div>
                            <div className="py-2 my-2"><span></span></div>
                            <div className="register py-2">
                            <a href="#">New user?</a>
                            <a href="#">Register Now</a>
                            </div>
                        </form>
                        </div>
                    </div>
              </div>
            </div>
           </div>
 <FooterButton />
 {/* <LandingPage /> */}
      </div>
    );
}
  
  export default Loginform;


  
