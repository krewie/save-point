type HomeCardProps = {
  href: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
};

export default function HomeCard({
  href,
  title,
  description,
  image,
  alt,
}: HomeCardProps) {
  return (
    <a href={href} className="win-card">
      <div className="win-card__titlebar">
        <span className="win-card__title">{title}</span>
        <span className="win-card__dot">■</span>
      </div>

      {image && (
        <img
          src={image}
          alt={alt ?? title}
          className="win-card__image"
        />
      )}

      <div className="win-card__body">
        <p className="win-card__description">{description}</p>
      </div>
    </a>
  );
}