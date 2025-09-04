function App() {
  return (
    <>
      <div className="todo">
        <h1 className="todo__title">To Do List</h1>
        <form className="todo__form">
          <div className="todo__field field">
            <label
              className="field__label"
              htmlFor="new-task"
            >
              New task title
            </label>
            <input
              className="field__input"
              id="new-task"
              placeholder=" "
            />
            <button className="button">Add</button>
          </div>
        </form>
        <form className="todo__form">
          <div className="todo__field field">
            <label
              className="field__input"
              htmlFor="search-task"
            >
              Search task
            </label>
            <input
              className="field__input"
              id="search-task"
              autoComplete={false}
            />
          </div>
        </form>
        <div className="todo__info">
          <div className="todo__total-tasks">
            Total Tasks: <span>3</span>
          </div>
          <button
            className="todo__delete-all-button"
            type="button"
          >
            Delete All
          </button>
        </div>
        <ul className="todo__list">
          <li className="todo__item todo-item">
            <input
              className="todo-item__checkbox"
              id="todo-1"
              type="checkbox"
            />
            <label
              className="todo-item__label"
              htmlFor="todo-1"
            >
              Task 1
            </label>
            <button
              className="todo-item__delete-button"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="#757575" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
