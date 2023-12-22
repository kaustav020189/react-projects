import { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  useEffect(() => {
    setBannerStyles(`${styles.welcomeBanner}  ${styles.welcomeTransition}`);
  }, []);

  const [bannerStyles, setBannerStyles] = useState(styles.welcomeBanner);

  return (
    <>
      <div className={styles.homeContainer}>
        <h2 className={bannerStyles}>We are home</h2>
        <p className={styles.paragraph}>Click on the links on the navbar</p>
      </div>
    </>
  );
};

export default Home;
