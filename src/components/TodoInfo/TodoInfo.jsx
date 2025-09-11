import './TodoInfo.scss'
import Button from '@/components/Button'

const TodoInfo = () => {
  return (
    <div className="todo-info">
      <div className="todo-info__total-tasks">
        Total Tasks: <span>3</span>
      </div>
      <Button
        className="todo-info__delete-all-button is-visible"
        label="Delete All"
        mode="transparent"
      />
    </div>
  )
}

export default TodoInfo
