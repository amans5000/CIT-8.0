import styles from "./styleModules/Sponsor.module.css";

const Sponsor = () => {
  return (
    <div className={`container ${styles.container}`} id="Sponsor">
      <div
        className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 ${styles.sponsorContainer}`}
      >
        <h2>Event Sponsors</h2>
        <div className="d-flex justify-content-center mt-4">
          <img
            src="ims.png"
            alt="ims"
            className="mx-3"
            style={{ maxHeight: "100px" }}
          />
          <img
            src="Screenshot 2024-11-04 205749.png"
            alt="techbairn"
            className="mx-3"
            style={{ maxHeight: "100px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
