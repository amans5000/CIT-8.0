import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">Contact Us:</div>
      <div className="contact-icons">
        <FaFacebookSquare />
        <FaInstagram />
        <FaLinkedin />
        <FaEnvelope />
      </div>
    </div>
  );
};

export default Contact;
