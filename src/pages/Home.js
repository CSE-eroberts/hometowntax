import Hero from "../componets/Hero";
import ProcessSection from "../componets/ProcessSection";
import ServicesSection from "../componets/ServicesSection";
import TeamSection from "../componets/TeamSection";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ProcessSection />
      <ServicesSection />
      <TeamSection />
    </div>
  );
};

export default Home;
