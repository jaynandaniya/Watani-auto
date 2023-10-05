

function LandingPage() {
    return (
      <div className="landingpage-bg">
          <div className="container">
          <div className="row">
          <div className="col-md-11">
          <div className="logo">
          <img src={...require('../assets/logo/Logo.png')} alt="logo" className="brand_logo" />
          </div>
        </div>
        <div className="col-md-1">
            <div className="">
              <h5>En <i className="fa fa-angle-down " aria-hidden="true"></i></h5>
            </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
  
  export default LandingPage;