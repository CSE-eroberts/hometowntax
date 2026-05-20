function ProcessCard(props) {
  return (
    <div className="process-card">
      <img src={props.icon} alt="Document Icon" className="process-icon" />

      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProcessCard;
