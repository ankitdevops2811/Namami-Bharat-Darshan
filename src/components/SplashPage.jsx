import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./spash.css";
const SplashPage = () => {
  let location = useLocation();
  useEffect(() => {
    let splash = document.getElementById("divSplash");
    splash.style["display"] = "block";
    // Set a timeout to redirect after 3 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      // Redirect to the home page
      //   navigate("/");
      let splash = document.getElementById("divSplash");
      splash.style["display"] = "none";
    }, 1100); //3sec

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div
      className="wow fadeIn"
      id="divSplash"
      style={{
        // backgroundColor: "cornflowerblue",
        backgroundImage: 'url("/img-mission/blacklogo.jpeg")',
        width: "100%",
        height: "100%",
        position: "fixed",
        left: "0px",
        top: "0px",
        zIndex: "9999",
        //down-css to fix bg-image
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <img src="/img-mission/blacklogo.jpeg" className="center" /> */}

      {/* <h1
        className="animated zoomIn"
        style={{ textAlign: "center", marginTop: "2%", fontSize: "80px" }}
      >
        <span style={{ color: "white" }}>MISSION</span>{" "}
        <span style={{ color: "yellow" }}> WALK</span>
      </h1>
      <h3
        style={{ textAlign: "center", marginTop: "1%", fontSize: "50px", color:"white" }}
      
      >Hope for neurologically disabled in India</h3> */}
    </div>
  );
};

export default SplashPage;
