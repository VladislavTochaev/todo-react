import './TodoInfo.scss'
import Button from '@/components/Button'
import clsx from 'clsx'

const TodoInfo = (props) => {
  const { tasks, deleteAllTasks } = props

  return (
    <div className="todo-info">
      <div className="todo-info__total-tasks">
        Total tasks: <span>{tasks.length}</span>
      </div>
      <Button
        className={clsx(
          'todo-info__delete-all-button',
          tasks.length > 0 && 'is-visible'
        )}
        label="Delete All"
        mode="transparent"
        onClick={deleteAllTasks}
      />
    </div>
  )
}

export default TodoInfo
