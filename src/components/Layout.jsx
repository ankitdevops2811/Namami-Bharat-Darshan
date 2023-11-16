import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SplashPage from "./SplashPage";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <SplashPage />
    </>
  );
};

export default Layout;
