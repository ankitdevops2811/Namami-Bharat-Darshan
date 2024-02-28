import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./spash.css";
const SplashPage = () => {
  let location = useLocation();
  useEffect(() => {
    let splash = document.getElementById("divSplash");
    splash.style["display"] = "block";
    const timeoutId = setTimeout(() => {

      let splash = document.getElementById("divSplash");
      splash.style["display"] = "none";
    }, 1100); //3sec

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div
      className="wow fadeIn"
      id="divSplash"
      style={{
        // backgroundColor: "cornflowerblue",
        backgroundImage: 'url("/images/blacklogo.jpeg")',
        width: "100%",
        height: "100%",
        position: "fixed",
        left: "0px",
        top: "0px",
        zIndex: "9999",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
    </div>
  );
};

export default SplashPage;
