  function Navbar() {
    return (
      <div className="navbg">
           <div className="container  justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="logo p-2 w-100">
                        <img src={require('../assets/logo/Logo.png')} alt="logo" className="brand_logo" />
                    </div>
                    <div className=" p-2 flex-shrink-1"> En<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
      </div>
    );
  }
  
  export default Navbar;