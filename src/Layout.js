import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";


const Layout = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(frame);
  }, [hash, pathname]);

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
