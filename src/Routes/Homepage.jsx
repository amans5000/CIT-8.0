import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import Sponsor from "../Components/Sponsor";
import Prizes from "../Components/Prizes";
import TitlePage from "../Components/TitlePage";

const Homepage = () => {
  return (
    <>
      <TitlePage />
      <About />
      <Schedule />
      <Prizes />
      <Faq />
      <Sponsor />
      <Contact />
    </>
  );
};

export default Homepage;
