import "./css/ProcessSection.css";
import Card from "./Card";
import Schedule from "./Schedule";

const processCards = [
  {
    title: "Gather Docs",
    description:
      "Gather your documents ahead of your appointment so we can get started quickly.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <path d="M14 10h25l9 9v35H14V10Z" />
        <path d="M39 10v9h9" />
        <path d="M22 28h13M22 36h11M22 44h9" />
        <rect x="37" y="34" width="17" height="21" rx="2" />
        <path d="M42 41h7M42 47h2M48 47h2M42 52h2M48 52h2" />
      </svg>
    ),
  },
  {
    title: "Schedule Meeting",
    description: "Call or book an appointment online to meet with us and get started.",
    action: <Schedule />,
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <rect x="12" y="15" width="40" height="38" rx="4" />
        <path d="M21 9v11M43 9v11M12 26h40" />
        <path d="M22 35h4M32 35h4M42 35h4M22 44h4M32 44h4" />
        <circle cx="47" cy="49" r="9" fill="#ffffff" />
        <path d="m43 49 3 3 6-7" />
      </svg>
    ),
  },
  {
    title: "File with Confidence",
    description:
      "We handle your return accurately so you can feel confident everything is done right.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <path d="M16 9h25l8 8v38H16V9Z" />
        <path d="M41 9v9h8" />
        <circle cx="29" cy="25" r="7" />
        <path d="m25 25 3 3 6-7M24 39h12M24 47h8" />
        <path d="m43 36 8 4-10 14-6 2 1-6 10-14" />
      </svg>
    ),
  },
];

function ProcessSection() {
  return (
    <section className="process-section">
      <h2>How It Works</h2>

      <div className="process-cards">
        {processCards.map((card) => (
          <Card
            key={card.title}
            variant="process"
            title={card.title}
            description={card.description}
            icon={card.icon}
          >
            {card.action}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
