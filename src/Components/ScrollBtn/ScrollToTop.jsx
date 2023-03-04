import "./ScrollBtn.css";
import { CgArrowUpR } from "react-icons/cg";
import { useState } from "react";

const ScrollToTop = () => {
  let [isScrolled, setIsScrolled] = useState(false);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <div className='arrowDiv'>
      {" "}
      {isScrolled && (
        <CgArrowUpR className='iconPosition iconStyle' onClick={scrollUp} />
      )}{" "}
    </div>
  );
};

export default ScrollToTop;
