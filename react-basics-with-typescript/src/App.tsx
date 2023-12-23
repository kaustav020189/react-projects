import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";

const App = () => {
  useEffect(() => {
    setBannerStyles(`${styles.welcomeBanner}  ${styles.welcomeTransition}`);
  }, []);

  const [bannerStyles, setBannerStyles] = useState(styles.welcomeBanner);

  return (
    <>
      <Navbar></Navbar>
      <div className={styles.homeContainer}>
        <h2 className={bannerStyles}>We are home</h2>
        <p className={styles.paragraph}>
          Click on the menu links to get started
        </p>
      </div>
    </>
  );
};

export default App;
