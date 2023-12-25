import { useState, useEffect } from "react";

import PersonCard from "./Person/PersonCard";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="flex flex-wrap w-2/3 h-fit bg-yellow-50">
        <p className="text-2xl m-3">React Fetch and Render</p>
        <div className="flex w-full p-4 justify-start">
          <ul className="w-fit h-fit">
            {products.map((el) => (
              <li key={el.id} className="list-disc">
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
