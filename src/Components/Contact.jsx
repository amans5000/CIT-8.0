import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import styles from "./styleModules/Contact.module.css";

const Contact = () => {
  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 py-5 ${styles.container}`}
      id="Contact"
    >
      <div className="text-center mb-4">
        <h2>Contact Us:</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mx-3">
          <FaFacebookSquare size={40} />
        </div>
        <div className="mx-3">
          <FaInstagram size={40} />
        </div>
        <div className="mx-3">
          <FaLinkedin size={40} />
        </div>
        <div className="mx-3">
          <FaEnvelope size={40} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
