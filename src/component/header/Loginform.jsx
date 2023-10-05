import FooterButton from '../Footer/FooterButton'

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
                        <h2 class="text-left mb-4 pt-3 px-5">Welcome !</h2>
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
                            <div className="login-btn my-5 "> <a href="#">Login</a></div>
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
      </div>
    );
}
  
  export default Loginform;
