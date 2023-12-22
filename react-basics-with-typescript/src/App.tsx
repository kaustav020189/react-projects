import "./App.module.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Apps from "./Pages/Apps";

const App = () => {
  // <BrowserRouter> must be the container of all route related tags. Latest version of React router dom
  // suggests <BrowserRouter> to be placed in index.tsx and replace (or enclose) the App component.
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/apps" element={<Apps />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
