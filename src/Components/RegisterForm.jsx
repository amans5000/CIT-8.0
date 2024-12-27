const RegisterForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <form className="p-4 rounded shadow registration-form col-md-8 box">
        <h2 className="text-center mb-4">Registration Form</h2>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email Id"
          required
        />
        <input
          className="form-control mb-3"
          type="tel"
          placeholder="Phone Number"
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Roll Number"
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Reg. Number"
          required
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Branch"
          required
        />
        <button type="submit" className="btn btn-primary mb-3">
          Register
        </button>
        <p className="text-center mt-3">
          Already registered? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
