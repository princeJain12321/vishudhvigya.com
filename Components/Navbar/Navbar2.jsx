import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
        <ul className="d-flex">
     {/* <li><a className="nav-item" href="https://wa.me/918923850711" target="_blank"><FontAwesomeIcon icon="fa-solid fa-house" /></a></li> */}
     <li><a className="nav-item" href="https://www.youtube.com/@VishuddhVigyavaani/videos" target="_blank"><FaYoutube size={20} /></a></li>
     <li><a className="nav-item" href="https://www.instagram.com/vishuddhvigya/" target="_blank"><FaInstagram size={20} /></a></li>
     <li><a className="nav-item" href="https://www.facebook.com/vishuddhvigya" target="_blank"><FaFacebook size={20} /></a></li>
     <li><a className="nav-item" href="https://wa.me/918923850711" target="_blank"><FaWhatsapp size={20} /></a></li>   
     </ul>   
        
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
