import "./css/ContactSection.css";
import {useState} from "react"

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.6 3.8 9 8.9l-2.1 1.3c1 2.3 2.7 4 5 5l1.3-2.1 5.1 2.4-.8 3.8c-.2.8-.9 1.3-1.7 1.2C8.9 19.8 4.2 15.1 3.5 8.2c-.1-.8.4-1.5 1.2-1.7l1.9-.7Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function ContactSection() {
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setFeedback("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6117ef0-0fcd-481e-8f2c-28434894737b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFeedback("Message sent!");
    } else {
      setFeedback("Message failed to send.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-panel">
        <div className="contact-form-area">
          <h2>Contact Us</h2>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="contact-form-row">
              <input type="text" name="name" placeholder="Full Name" />
              <input type="email" name="email" placeholder="Email Address" />
            </div>
            <textarea name="message" placeholder="Message" />
            <button type="submit">Submit Form</button>
            {feedback && <div className="form-feedback">{feedback}</div>}
          </form>
        </div>

        <aside className="office-card">
          <h2>Our Office</h2>

          <div className="office-detail">
            <LocationIcon />
            <p>503 8th Ave, Aynor, SC 29511</p>
          </div>
          <div className="office-detail">
            <PhoneIcon />
            <p>(843) 358-1070</p>
          </div>
          <div className="office-detail">
            <MailIcon />
            <a href="mailto:hometowntaxservice@gmail.com">
              hometowntaxservice@gmail.com
            </a>
          </div>

          <h2 className="hours-heading">Our Hours</h2>
          <div className="office-detail office-hours">
            <ClockIcon />
            <p>
              Monday-Friday
              <br />
              9 am-7pm
              <br />
              Appointment &amp; Walk In's
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ContactSection;
