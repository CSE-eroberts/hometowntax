import {Outlet} from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";


const Layout = () => {
  return (
    <div className="site-shell">
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
