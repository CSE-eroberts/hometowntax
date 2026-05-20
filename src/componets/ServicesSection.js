import Card from "./Card";
import "./css/ServicesSection.css";

const services = [
  {
    title: "Individual Tax",
    description: "Tax preparation and planning to help you keep more of what you earn.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <circle cx="32" cy="18" r="11" />
        <path d="M13 55c0-12 8-21 19-21s19 9 19 21H13Z" />
      </svg>
    ),
  },
  {
    title: "Business Tax",
    description: "Strategic tax solutions for businesses of all sizes.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <path d="M12 21h40v31H12V21Z" />
        <path d="M24 21v-7h16v7" />
        <path d="M27 33h10v6H27z" />
        <path d="M12 31h15M37 31h15" />
      </svg>
    ),
  },
  {
    title: "Accounting & Bookkeeping",
    description: "Accurate books and clear financials you can count on.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <path d="M32 8a24 24 0 1 0 24 24H32V8Z" />
        <path d="M40 8v16h16A24 24 0 0 0 40 8Z" />
      </svg>
    ),
  },
  {
    title: "Payroll Services",
    description: "Reliable payroll processing so you can take care of your team.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <path d="M12 30 23 18l9 7 9-7 11 12-7 8-13-9-13 9-7-8Z" />
        <path d="m24 39 8 7 8-7" />
        <path d="m18 35 12 12c2 2 5 2 7 0l9-9" />
      </svg>
    ),
  },
  {
    title: "Advisory Services",
    description: "Trusted guidance to help you grow and plan for the future.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <path d="M32 7 50 15v15c0 13-7 23-18 27-11-4-18-14-18-27V15L32 7Z" />
      </svg>
    ),
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>

      <div className="services-cards">
        {services.map((service) => (
          <Card
            key={service.title}
            variant="service"
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
