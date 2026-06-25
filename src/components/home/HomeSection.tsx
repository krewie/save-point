import type { ReactNode } from "react";

type HomeSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export default function HomeSection({
  title,
  description,
  children,
}: HomeSectionProps) {
  return (
    <section className="home-section">
      <div className="home-section__header">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>

      <div className="home-section__grid">{children}</div>
    </section>
  );
}