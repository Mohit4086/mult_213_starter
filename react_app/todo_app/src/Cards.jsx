// Add a new component for the cards
export function Cards(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>{props.content}</p>
    </div>
  );
}