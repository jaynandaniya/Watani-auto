import FooterButton from '../Footer/FooterButton'

function Loginform() {
    return (
        <div>
      <div className="container d-flex gap "> 
            <div className="coll-70"><span></span></div>
            <div className="coll-30 blur ">
               <div className="form" >      
                     <h2 className="text-right py-5 my-2 ">Welcome !</h2>
               <form  >
               <div className="mb-3">
            <div className="mb-4">                
                <input type="email" className="login-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="mb-4">
                <input type="password" className="login-input" id="password" placeholder="Password" />
            </div>
            <div className="forgett-psw  mb-3"> 
             <a href="#" className="text-end  "> forget Password?</a>
            </div>
            <div className="my-5">
                <a type="submit" className="text-center login-btn my-5">Login</a>
            </div >
            <div className=" user-register gap-4 my-3 ">
                <a href="#" className="text-center">New User?</a>
                <a href="#" className="text-center ">Register Now</a>
            </div>
            </div>
                  </form>
                  </div>
             </div>     
        </div>
            <FooterButton />
        </div>
    );
  }
  
  export default Loginform;
