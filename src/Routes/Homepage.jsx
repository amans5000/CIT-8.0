import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import Sponsor from "../Components/Sponsor";
import Prizes from "../Components/Prizes";
import Navbar from "../Components/Navbar";
import styles from "../Components/styleModules/Homepage.module.css";
import CitTitle from "../Components/CitTitle";
import FAQTitle from "../Components/FAQTitle";

const Homepage = () => {
  return (
    <div className={styles.HomepageContainer}>
      <Navbar />
      <CitTitle />
      <About />
      <Schedule />
      <Prizes />
      <FAQTitle />
      <Faq />
      <Sponsor />
      <Contact />
    </div>
  );
};

export default Homepage;
