import styles from "./styleModules/FAQTitle.module.css";
const FAQTitle = () => {
  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 p-3 ${styles.FAQTitleContainer}`}
    >
      <div className="text-center mb-5">
        <h2>
          Frequently <b>Asked</b> <br /> Questions
        </h2>
      </div>
    </div>
  );
};

export default FAQTitle;
