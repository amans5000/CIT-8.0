import Navbar from "./Navbar";
import CitTitle from "./CitTitle";

const TitlePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <CitTitle />
      </div>
    </div>
  );
};

export default TitlePage;
