import { Cards } from "./Cards";

// Add a new component for the cards
export function ToDoList(props) {

const todos = props.todos;
 
 // Build up the UI element for the TODOs
  let listContent = <></>;

  if (todos.length == 0) {
    // If there are no TODOs, tell the user what to do
    listContent = <Cards title="No TODOs yet!" content="Add your first TODO above." />;
  } else {
    // If there are TODOs, render them as li elements
    listContent = todos.map((item, i) => {

      return <Cards
        title={item.name}
      />;

    });}
      
      return (<>
        <section className='todo-section'>
          <h2>My TODOs:</h2>
          <ul className="todo-list" id="todo-list">
            {listContent}
          </ul>
        </section>
      </>)
      
    
  }

