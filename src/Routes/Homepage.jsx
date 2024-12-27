import Navbar from "../Components/Navbar";
import CitTitle from "../Components/CitTitle";
import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import Sponsor from "../Components/Sponsor";
import Prizes from "../Components/Prizes";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <CitTitle />
      <About />
      <Schedule />

      <div className="vector-container">
        <img
          src="WhatsApp_Image_2024-11-04_at_00.20.59_2df4364e-removebg-preview.png"
          alt="coding-monkey"
        />
      </div>

      <Prizes />
      <Faq />
      <Sponsor />
      <Contact />
    </>
  );
};

export default Homepage;
