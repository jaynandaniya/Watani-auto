
function Loginform() {
    return (

      <div>
           <div className="container d-flex blur">
       
                {/* <div></div> */}
                <div><h2 className="text-right">Welcome !
        </h2>
        <form>
            <div className="mb-3">                
                <input type="email" className="login-input" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="mb-3 ">
                <input type="password" className="login-input" id="password" placeholder="Password" />
            </div>
            <div className=" text-left "> 
            {/* d-flex flex-row-reverse bd-highlight */}
              <div className="p-2 bd-highlight text-right "><a href="#"> forget Password?</a></div>
            </div>
            <div className="text-center mb-3 ">
                <a type="submit" className="center login-btn">Login</a>
            </div>
            <div className="text-center  d-flex mt-1 ">
              
            </div>
        </form></div>
        
    </div>     
          </div>
    );
  }
  
  export default Loginform;
