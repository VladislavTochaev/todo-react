import './TaskItem.scss'

const TaskItem = (props) => {
  const {} = props

  return (
    <li className="task-item">
      <input className="task-item__checkbox" id="task-1" type="checkbox" />
      <label className="task-item__label" htmlFor="task-1">
        Task 1
      </label>
      <button className="task-item__delete-button" type="button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="#757575"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </li>
  )
}

export default TaskItem
