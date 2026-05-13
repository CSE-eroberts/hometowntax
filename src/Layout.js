import {Outlet} from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Nav from "./componets/Nav";

const Layout = () => {
  return (
    <div className="site-shell">
      <Header />
      <Nav />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
