import './Homenavbar.css'

function Homenavbar() {

  return (
    <nav className="navbar navbar-expand-lg landingpage-bg blur">
    <div className="container">
    {/* <div className="hlogo"> */}
    <a class="navbar-brand hlogo img" href="#">
              <img src={require('../assets/logo/Logo.png')} alt="logo" className="brand_logo" />
              </a>
              {/* </div> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
        <div className="navbar-nav gap-3 txt-white ">
          <a className="nav-link " aria-current="page" href="#">All</a>
          <a className="nav-link" href="#">Hatchback</a>
          <a className="nav-link" href="#">Seden</a>
          <a className="nav-link" href="#">SUV</a>
          <a className="nav-link" href="#">Pick Ups</a>
          <a className="nav-link" href="#">EN <i className="fa fa-angle-down " aria-hidden="true"></i></a>
          <a className="nav-link" ><i className="fa fa-user" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Homenavbar;  