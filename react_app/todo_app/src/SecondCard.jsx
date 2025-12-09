import './SecondCard.css';

export function SecondCard({ title, subtitle, image, content }) {
  return (
    <div className="Secondcard">

      <h2 className="Secondcard__title">{title}</h2>

      <h3 className="Secondcard__subtitle">{subtitle}</h3>
      <p className="Secondcard__content">{content}</p>
    </div>
  );
}