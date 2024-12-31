import styles from "./styleModules/Faq.module.css";

const Faq = () => {
  return (
    // <div className={`container `}>
    // <div
    //   className={`container-fluid d-flex flex-column justify-content-center align-items-center vh-100 py-5 ${styles.container}`}
    // >

    <div className={`container text-center ${styles.container}`}>
      <div className={`row row-cols-2 row-cols-lg-5 g-2 g-lg-3 ${styles.container2}`}>
        <div className={`col ${styles.colDesign}`}>
          <div className="p-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, provident! Similique amet minima molestiae nam
            voluptatum labore vitae sit suscipit a consequuntur non et facere,
            exercitationem quos. Incidunt, quasi iste.
          </div>
        </div>
        <div className={`col ${styles.colDesign}`}>
          <div className="p-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, provident! Similique amet minima molestiae nam
            voluptatum labore vitae sit suscipit a consequuntur non et facere,
            exercitationem quos. Incidunt, quasi iste.</div>
        </div>
        <div className={`col ${styles.colDesign}`}>
          <div className="p-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, provident! Similique amet minima molestiae nam
            voluptatum labore vitae sit suscipit a consequuntur non et facere,
            exercitationem quos. Incidunt, quasi iste.</div>
        </div>
        <div className={`col ${styles.colDesign}`}>
          <div className="p-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, provident! Similique amet minima molestiae nam
            voluptatum labore vitae sit suscipit a consequuntur non et facere,
            exercitationem quos. Incidunt, quasi iste.</div>
        </div>
        <div className={`col ${styles.colDesign}`}>
          <div className="p-6"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, provident! Similique amet minima molestiae nam
            voluptatum labore vitae sit suscipit a consequuntur non et facere,
            exercitationem quos. Incidunt, quasi iste.</div>
        </div>
        <div className={`col ${styles.colDesign}`}>
          <div className="p-3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, provident! Similique amet minima molestiae nam
            voluptatum labore vitae sit suscipit a consequuntur non et facere,
            exercitationem quos. Incidunt, quasi iste.</div>
        </div>
        
        
      </div>
    </div>
    // </div>
  );
};

export default Faq;
