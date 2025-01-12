import styles from "./styleModules/About.module.css";
const About = () => {
  return (
    <div className={`container ${styles.container}`}>
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 p-3 ${styles.aboutContainer}`}
      >
        <div className="row w-100">
          <div className="col-md-1"></div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className={`container my-5 ${styles.Abouttextbox}`} id="About">
              <div className="card-body">
                <h2 className="mb-4">
                  ABOUT <br />
                  <b>CIT 8.0</b>
                </h2>
              </div>
              <p className={`lead  `}>
                CIT 7.0 is one-of-a-kind opportunity for all aspiring students
                as we unveil exhilarating challenges of national standard over
                the realms of basic mathematical aptitude, logical & verbal
                reasoning, and data interpretation. Not only does CIT implant an
                idea of various acclaimed aptitude tests like CAT, but our
                flagship event also never fails to provide a simulation of the
                overall screening procedure of the hiring companies. This is the
                most anticipated online event to compete for intellectual glory
                among a multitude of striving contestants.
              </p>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
