import { useNavigate } from "react-router-dom";

const CitTitle = () => {
  const navigate = useNavigate();

  return (
    <div className="cit-title">
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
  );
};

export default CitTitle;
