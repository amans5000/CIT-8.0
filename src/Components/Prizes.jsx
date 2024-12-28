import styles from "./styleModules/Prizes.module.css";

const Prizes = () => {
  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 p-3 ${styles.prizeContainer}`}
    >
      <div className="text-center">
        <h1 className="display-5 fw-bold">
          Win Cash PRIZES <br />
          worth <b>8K</b> For <br />
          <b>CIT 7.0</b>
        </h1>
      </div>
    </div>
  );
};

export default Prizes;
