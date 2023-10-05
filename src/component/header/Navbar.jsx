function Navbar() {
  return (
    <div className="navbar-bg">
    <div className="container" >
       <div className="row py-3  align-items-center ">
        <div className="col-md-11">
          <div className="logo">
          {/* <img src={require('../assets/logo/Logo.png')} alt="logo" className="brand_logo" /> */}
          </div>
        </div>
        <div className="col-md-1">
            <div className="drop">
              <h5>En <i className="fa fa-angle-down " aria-hidden="true"></i></h5>
            </div>
        </div>
       </div>
    </div>
    </div>
  );
}
  export default Navbar;



    {/* <div className="container  justify-content-between">
                   <div className="d-flex align-items-center">
                     <div className="logo p-2 w-100">
                      
                   </div>
                     <div className=" p-2 d-flex  "> En<i className="fa fa-angle-down " aria-hidden="true"></i>
                     </div>
                  </div>
             </div>  */}