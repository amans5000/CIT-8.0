const Schedule = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 py-5">
      <div className="row w-100">
        <div className="col-12 col-md-5 mb-4 d-flex justify-content-center">
          <img
            src="WhatsApp_Image_2024-11-04_at_00.20.59_2df4364e-removebg-preview.png"
            alt="coding-monkey"
            className="img-fluid"
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-12 col-md-5">
          <h1 className="display-4 text-center mb-4">
            SCHEDULE
            <br /> FOR <br />
            <b>CIT 8.0</b>
          </h1>
          <div>
            <p className="fw-bold">Preliminary Round:</p>
            <p>
              Candidates can attempt CIT only once in any of the three available
              slots:
            </p>
            <ul>
              <li>Slot 1: January 18, 2024 (9:00 PM - 9:45 PM)</li>
              <li>Slot 2: January 19, 2024 (9:00 PM - 9:45 PM)</li>
              <li>Slot 3: January 20, 2024 (9:00 PM - 9:45 PM)</li>
            </ul>

            <p className="fw-bold">Final Round:</p>
            <p>
              Candidates selected for the final round will receive a mail with
              details.
            </p>
            <p>Final: January 21, 2024 (9:00 PM - 9:45 PM)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
