import { useNavigate } from "react-router-dom";
import styles from "./styleModules/CitTitle.module.css";
import Navbar from "./Navbar";

const CitTitle = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className={`container-fluid ${styles.container}`} id="home">
        <div className={`container-fluid cit-title ${styles.citTitle}`}>
          <div className={` container-fluid title ${styles.title}`}>
            Cognitive
            <br />
            <span>
              {" "}
              <b>Intelligence</b> Test
            </span>
          </div>
          <div className=" container-fluid title-btns">
            <div className={`container-fluid btns ${styles.titleBtns}`}>
              <button
                className={`hero-btn login-btn ${styles.loginBtn}`}
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className={`hero-btn register-btn ${styles.registerBtn}`}
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitTitle;
