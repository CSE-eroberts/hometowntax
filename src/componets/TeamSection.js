import Card from "./Card";
import "./css/TeamSection.css";
import headshot1 from "../images/headshot1.png";
import headshot2 from "../images/headshot2.png";
import headshot3 from "../images/headshot3.png";

const teamMembers = [
  {
    title: "Crickette Nobles, CPA",
    subtitle: "Tax Specialist",
    description:
      "Over 10 years of experience in individual and small business tax preparation. Emily helps clients navigate tax season with clarity and confidence.",
    image: headshot1,
  },
  {
    title: "Matthew McCrackin, CPA",
    subtitle: "Tax & Accounting Advisor",
    description:
      "Matthew brings a strong background in accounting and tax strategy, with a focus on accuracy and long-term planning for financial goals.",
    image: headshot2,
  },
  {
    title: "Jennifer Cook, EA",
    subtitle: "Payroll & Advisory Specialist",
    description:
      "Jennifer specializes in payroll services and business advisory, supporting owners as they grow and plan with confidence.",
    image: headshot3,
  },
];

function TeamSection() {
  return (
    <section id="ourteam" className="team-section">
      <h2>Our Team</h2>

      <div className="team-cards">
        {teamMembers.map((member) => (
          <Card
            key={member.title}
            variant="team"
            title={member.title}
            subtitle={member.subtitle}
            description={member.description}
            image={member.image}
            imageAlt={member.title}
          />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
