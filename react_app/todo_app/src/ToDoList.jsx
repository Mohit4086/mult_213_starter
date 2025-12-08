export function ToDoList({ handleFormSubmit, listContent }) {
  return (
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
          <button className="todo-form__button" type="submit">
            Add
          </button>
        </form>
      </section>

      <section>
        <h2>My TODOs:</h2>
        <ul className="todo-list" id="todo-list">
          {listContent}
        </ul>
      </section>
    </main>
  );
}