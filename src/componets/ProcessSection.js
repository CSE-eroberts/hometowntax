import "./css/ProcessSection.css";
import ProcessCard from "./ProcessCard";
import docIcon from "../images/docslogo.png";

function ProcessSection() {
  return (
    <section className="process-section">
      <h2>How It Works</h2>

      <div className="process-cards columns">
        <ProcessCard title="Gather Docs" description="Gather your documents ahead of your appointment so we can get started quickly." icon={docIcon} />
        <ProcessCard title="Schedule Meeting" description="Call or book an appointment online to meet with us and get started." icon={docIcon} />
        <ProcessCard title="File with Confidence" description="We handle your return accurately so you can feel confident everything is done right." icon={docIcon} />
      </div>
    </section>
  );
}

export default ProcessSection;
