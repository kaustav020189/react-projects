import { useEffect, useState } from "react";
import styles from "./PaginationApp.module.css";

const PaginationApp = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data: any) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <p>hello</p>
      {/* not working */}
      {products &&
        products.map(() => {
          <h6>hello</h6>;
        })}
    </>
  );
};

export default PaginationApp;
