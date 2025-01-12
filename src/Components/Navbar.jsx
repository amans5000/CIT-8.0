import { useDispatch } from "react-redux";
import { setScrollTarget } from "../Store/scrollSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleNavClick = (sectionId) => {
    dispatch(setScrollTarget(sectionId)); // Dispatch the ID of the section to scroll to
  };

  return (
    <div className="p-0 m-0 border-0 bd-example w-100">
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#5F185A" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="whiteIste (1).png" alt="iste-logo" width="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                className="nav-item p-2"
                onClick={() => handleNavClick("Home")}
              >
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li
                className="nav-item p-2"
                onClick={() => handleNavClick("About")}
              >
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li
                className="nav-item p-2"
                onClick={() => handleNavClick("Schedule")}
              >
                <a className="nav-link" href="#">
                  Instructions
                </a>
              </li>
              <li
                className="nav-item p-2"
                onClick={() => handleNavClick("FAQ")}
              >
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li
                className="nav-item p-2"
                onClick={() => handleNavClick("Sponsor")}
              >
                <a className="nav-link" href="#">
                  Sponsors
                </a>
              </li>
              <li
                className="nav-item p-2"
                onClick={() => handleNavClick("Contact")}
              >
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
