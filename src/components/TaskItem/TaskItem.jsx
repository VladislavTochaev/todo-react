import './TaskItem.scss'
import clsx from 'clsx'

const TaskItem = (props) => {
  const {
    id,
    label,
    isChecked,
    isDisappearing,
    remove,
    toggle,
  } = props

  return (
    <li className={clsx('task-item', isDisappearing && 'is-disappearing')}>
      <input
        className="task-item__checkbox"
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => toggle(id)}
      />
      <label
        className="task-item__label"
        htmlFor={id}
      >
        {label}
      </label>
      <button
        className="task-item__delete-button"
        aria-label="Delete"
        title="Delete"
        onClick={() => remove(id)}
      >
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
