import { useEffect, useState } from "react";
import styles from "./PaginationApp.module.css";
import BounceLoader from "react-spinners/BounceLoader";

const PaginationApp = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [displaySpinner, setDisplaySpinner] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      // Create a spinner effect with setTimeout()
      fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((data) => {
          setDisplaySpinner(false);
          setProducts(data.products);
        })
        .catch((error) => console.error(error));
    }, 2000);
  }, []);

  return (
    <main className={styles.mainContainer}>
      {displaySpinner ? (
        // The loader is from the library react-spinners
        <BounceLoader color="#36d7b7" />
      ) : (
        <ul>
          {products.map((el: any) => {
            return (
              <li key={el.id}>
                <span>Product title &nbsp;&nbsp;&nbsp; </span>
                {el.title}
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
};

export default PaginationApp;
