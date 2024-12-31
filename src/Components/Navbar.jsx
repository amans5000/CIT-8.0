import styles from "./styleModules/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={` ${styles.Nav}`}>
        <div className={`container-fluid ${styles.navElements}`}>
          <a className="navbar-brand" href="#">
            <img
              src="whiteIste (1).png"
              alt="Logo"
              width="30"
              height="20"
              className={`d-inline-block align-text-top ${styles.isteLogo}`}
            />
          </a>
          <div className={styles.navLinks}>
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Instructions
            </a>
            <a href="#" className="nav-link">
              FAQ
            </a>
            <a href="#" className="nav-link">
              Sponsors
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import { FaBars } from "react-icons/fa"; // Optional: Hamburger icon for mobile view

// const Navbar = () => {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light"
//       style={{ backgroundColor: "transparent" }}
//     >
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <img src="whiteIste (1).png" alt="iste logo" width="100" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <FaBars size={30} />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Instructions
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 FAQ
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Sponsors
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
