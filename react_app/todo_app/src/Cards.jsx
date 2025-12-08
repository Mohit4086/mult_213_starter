import './cards.css';

// Add a new component for the cards
export function Cards(props) {

  //subttitle 
  let subtitlecontent = null;
   if (props.subtitle){
    subtitlecontent = <h3>{props.subtitle}</h3>;
   } 

   //content
  let Content = null;
   if (props.content){
    Content = <p>{props.content}</p>;
   } 


  return (
    <div className="card">
      <h2>{props.title}</h2>
      {subtitlecontent}
      {Content}
    </div>
  );
}