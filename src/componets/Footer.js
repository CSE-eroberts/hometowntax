import "./css/Footer.css";
import ContactSection from "./ContactSection";

function Footer() {
  return (
    <footer className="site-footer">
      <ContactSection />
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hometown Tax. All rights reserved.</p>
        <p>Aynor, SC tax preparation and business support.</p>
      </div>
    </footer>
  );
}

export default Footer;
