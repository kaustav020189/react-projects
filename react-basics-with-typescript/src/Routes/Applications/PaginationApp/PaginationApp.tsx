import { MouseEventHandler, useEffect, useState } from "react";
import styles from "./PaginationApp.module.css";
import BounceLoader from "react-spinners/BounceLoader";
import { useOutletContext } from "react-router-dom";

const PaginationApp = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [displaySpinner, setDisplaySpinner] = useState<boolean>(true);

  // Getting the following function as props from parent, throught react router outlet
  const pullUpDrawer: Function = useOutletContext();

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

    // pull up the drawer after 2 seconds
    setTimeout(() => {
      pullUpDrawer();
    }, 1000);
  }, []);

  const recordsPerPage: number = 5; // any custom number
  const numberOfPages: number = Math.ceil(products.length / recordsPerPage);
  const pageNumbers: number[] = [...Array(numberOfPages + 1).keys()].slice(1);
  // creates an array with 6 undefined values and .keys() returns the indices only. Then we slice off the 0 from the list.

  const [currentPage, setCurrentPage] = useState<number>(1);
  const currentStartIndex = currentPage * recordsPerPage - recordsPerPage;
  const currentLastIndex = currentPage * recordsPerPage - 1;

  // generate a subset from records for display
  const records = products.slice(currentStartIndex, currentLastIndex + 1);

  const changePage = (e: React.MouseEvent<HTMLElement>, ref: string) => {
    if (ref === "prev") {
      setCurrentPage((prev) => (prev !== 1 ? prev - 1 : prev));
      console.log(currentPage);
    } else {
      setCurrentPage((prev) => (prev !== numberOfPages ? prev + 1 : prev));
      console.log(currentPage);
    }
  };

  return (
    <main className={styles.mainContainer}>
      {displaySpinner ? (
        // The loader is from the library react-spinners
        <BounceLoader color="#36d7b7" />
      ) : (
        <div>
          <ul>
            {records.map((el: any) => {
              return (
                <li key={el.id}>
                  <span>Product title</span>
                  {el.title}
                </li>
              );
            })}
          </ul>
          {records && (
            <ul className={styles.pagination}>
              {currentPage !== 1 && (
                <li>
                  <button
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      changePage(e, "prev")
                    }
                  >
                    Prev
                  </button>
                </li>
              )}
              {pageNumbers.map((el, index) => (
                <li
                  key={index}
                  className={
                    el == currentPage ? styles.numberActive : undefined
                  }
                >
                  {el}
                </li>
              ))}
              {currentPage !== numberOfPages && (
                <li>
                  <button
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      changePage(e, "next")
                    }
                  >
                    Next
                  </button>
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </main>
  );
};

export default PaginationApp;
