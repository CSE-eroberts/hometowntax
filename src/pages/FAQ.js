import "./css/FAQ.css";

const faqGroups = [
  {
    title: "General Questions",
    icon: "user",
    questions: [
      {
        question: "What services do you offer?",
        answer:
          "We help with individual tax preparation, business tax preparation, payroll questions, bookkeeping support, and tax notices.",
      },
      {
        question: "Do you work with individuals and businesses?",
        answer:
          "Yes. We work with individuals, families, self-employed clients, and small business owners.",
      },
      {
        question: "Are you accepting new clients?",
        answer:
          "Yes. New clients are welcome. Contact the office to schedule a time or ask what documents to bring.",
      },
      {
        question: "Do you offer virtual appointments?",
        answer:
          "Some work can be handled remotely, depending on your situation and the documents needed.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We primarily serve local clients near Aynor and the surrounding communities, and can also assist some remote clients.",
      },
    ],
  },
  {
    title: "Tax Preparation",
    icon: "document",
    questions: [
      {
        question: "What documents should I bring for my appointment?",
        answer:
          "Bring your photo ID, Social Security cards or ITIN letters, W-2s, 1099s, dependent information, prior-year return, and any income or deduction records.",
      },
      {
        question: "How much do tax preparation services cost?",
        answer:
          "Pricing depends on the complexity of the return. We can give clearer guidance once we understand your filing needs.",
      },
      {
        question: "How long does tax preparation take?",
        answer:
          "Simple returns may be completed quickly. Business, rental, multi-state, or incomplete returns can take longer.",
      },
      {
        question: "Can you help if I'm behind on filing taxes?",
        answer:
          "Yes. We can help with prior-year filings and explain the information needed to get caught up.",
      },
      {
        question: "Can you amend a previously filed tax return?",
        answer:
          "Yes. Bring the original return and any corrected documents so we can review whether an amendment is needed.",
      },
    ],
  },
  {
    title: "Business Services",
    icon: "briefcase",
    questions: [
      {
        question: "What business structures do you work with?",
        answer:
          "We work with sole proprietors, LLCs, partnerships, corporations, and other small business structures.",
      },
      {
        question: "Do you provide monthly bookkeeping?",
        answer:
          "We can discuss bookkeeping support and help determine what level of service fits your business.",
      },
      {
        question: "Can you help set up payroll?",
        answer:
          "Yes. We can help business owners understand payroll setup, filing responsibilities, and related tax deadlines.",
      },
      {
        question: "Do you help with quarterly estimated taxes?",
        answer:
          "Yes. We can help calculate estimates and explain when payments are due.",
      },
      {
        question: "Can you help new businesses get started?",
        answer:
          "Yes. We can help new owners understand tax setup, recordkeeping, and early filing responsibilities.",
      },
    ],
  },
  {
    title: "IRS & Tax Problems",
    icon: "shield",
    questions: [
      {
        question: "What should I do if I receive a letter from the IRS?",
        answer:
          "Bring the full notice to our office before responding. We can review what it means and help you plan next steps.",
      },
      {
        question: "Can you help with IRS payment plans?",
        answer:
          "Yes. We can explain common payment options and help you understand what information the IRS may require.",
      },
      {
        question: "Do you represent clients before the IRS?",
        answer:
          "We can review your situation and discuss the best next step for notices, balances, and agency questions.",
      },
      {
        question: "Can you help settle tax debt?",
        answer:
          "We can help you understand available options and what documentation may be needed.",
      },
    ],
  },
  {
    title: "Appointments & Payments",
    icon: "card",
    questions: [
      {
        question: "How do I schedule an appointment?",
        answer:
          "You can call the office, use the online scheduling option, or send a message through the contact form.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "Contact the office for current payment options and billing details.",
      },
      {
        question: "Do you offer evening or weekend appointments?",
        answer:
          "Availability can vary by season. Call the office to ask about current appointment times.",
      },
      {
        question: "Do you require a deposit to book an appointment?",
        answer:
          "Deposit requirements depend on the service. We will let you know before scheduling if one is needed.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    icon: "lock",
    questions: [
      {
        question: "Is my information secure?",
        answer:
          "We treat your tax documents and personal information carefully and limit access to the information needed for your service.",
      },
      {
        question: "Can I upload documents online?",
        answer:
          "Ask the office about the safest current way to provide digital documents.",
      },
      {
        question: "How do you protect my data?",
        answer:
          "We use careful document handling practices and avoid sharing private information unless required for your tax service.",
      },
    ],
  },
];

function FAQIcon({ type }) {
  const icons = {
    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l5 5v13H7V3Z" />
        <path d="M14 3v5h5M10 12h6M10 16h6" />
      </>
    ),
    briefcase: (
      <>
        <rect x="4" y="8" width="16" height="11" rx="2" />
        <path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M4 13h16" />
      </>
    ),
    shield: (
      <path d="M12 3 19 6v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3Z" />
    ),
    card: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 15h2" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 15v2" />
      </>
    ),
  };

  return (
    <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

const FAQ = () => {
  return (
    <section className="faq-page">
      <header className="faq-hero">
        <div className="faq-hero-content">
          <p className="faq-eyebrow">FAQ</p>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our tax, accounting, and
            advisory services.
          </p>
          <span aria-hidden="true" />
        </div>
      </header>

      <div className="faq-content">
        {faqGroups.map((group) => (
          <section className="faq-group" key={group.title}>
            <div className="faq-group-heading">
              <FAQIcon type={group.icon} />
              <h2>{group.title}</h2>
            </div>

            <div className="faq-list">
              {group.questions.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
