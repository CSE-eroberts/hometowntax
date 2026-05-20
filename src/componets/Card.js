import "./css/Card.css";

function Card({
  title,
  description,
  icon,
  iconAlt = "",
  image,
  imageAlt = "",
  initials,
  subtitle,
  variant = "default",
  children,
}) {
  const iconIsImage = typeof icon === "string";

  return (
    <article className={`card card-${variant}`}>
      {image && <img className="card-image" src={image} alt={imageAlt || title} />}

      {!image && initials && (
        <div className="card-image card-image-placeholder" aria-hidden="true">
          <span>{initials}</span>
        </div>
      )}

      {icon && (
        <div className="card-icon" aria-hidden={iconIsImage ? undefined : true}>
          {iconIsImage ? <img src={icon} alt={iconAlt} /> : icon}
        </div>
      )}

      <h3>{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      <p>{description}</p>
      {children && <div className="card-action">{children}</div>}
    </article>
  );
}

export default Card;
