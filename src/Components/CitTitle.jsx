import { useNavigate } from "react-router-dom";
import styles from "./styleModules/CitTitle.module.css";

const CitTitle = () => {
  const navigate = useNavigate();

  return (
    <div
      className={`d-flex flex-column min-vh-100 flex-grow-1 d-flex justify-content-center align-items-center ${styles.CitTitleContainer}`}
    >
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div className="title">
          Cognitive <b>Intelligence</b> Test
        </div>
        <div className="title-btns">
          <div className="btns">
            <button
              className="hero-btn login-btn"
              onClick={() => navigate("/login")}
            >
              Log in
            </button>
            <button
              className="hero-btn register-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitTitle;
