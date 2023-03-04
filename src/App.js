import React, { useEffect, useState } from "react";
import "./index.css";

//Components
import Header from "./Components/Header/Index";
import About from "./Components/About/About";
import Work from "./Components/Work/Index";
import Contact from "./Components/Contact/Index";
import Loader from "./Loader";

const App = () => {
  let [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className='App'>
      <Header />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
