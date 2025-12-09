import './App.css';
import { useState } from 'react';
import viteLogo from '/vite.svg';
import { Header } from './Header';
import { Footer } from './footer';
import { SecondCard } from './SecondCard.jsx';
import reactLogo from './assets/react.svg';
import { ToDoList } from './todolist.jsx';

function App() {
  // Define the TODO models
  const [todos, setTodos] = useState([]);

  // Set up add new TODO form handler
  const handleFormSubmit = (formData) => {
    const titleField = formData.get('title');
    console.log(`Handling new TODO: ${titleField}`);

    // Make new TODO model
    const newTodo = {
      name: titleField
    };

    const newTodos = [...todos, newTodo];

    // We call the React hook to update the application state
    setTodos(newTodos);
  };

  return (
    <>
      <Header title="Welcome to My Website!" message="Thanks for visiting my site." />
            <main>
        <section>
          <form id="todo-form" action={handleFormSubmit}>
            <input
              className="todo-form__input"
              id="todo-input"
              name="title"
              type="text"
              placeholder="Add a new task…"
              autoComplete="off"
              required
            />
            <button className="todo-form__button" type="submit">Add</button>
          </form>
        </section>
        <ToDoList todos={todos} /> 
        <SecondCard 
         title="Another card" 
         subtitle="this is another card" 
         content="This is the content of my SecondCard."  
       /> 
      </main>
          <Footer message="Contact me at contact@website.com" />

      <footer>
        <p className="read-the-docs">
          Click on the Vite (the build tool) and React (the frontend framework) logos to learn more
        </p>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </footer>
    </>
  )
}

export default App
