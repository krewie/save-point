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
    <a href={href} className="ps2-card">
      {image && (
        <img src={image} alt={alt ?? title} className="ps2-card__image" />
      )}

      <div className="ps2-card__body">
        <h3 className="ps2-card__title">{title}</h3>
        <p className="ps2-card__description">{description}</p>
      </div>
    </a>
  );
}