import './TaskList.scss'
import TaskItem from '@/components/TaskItem'

const TaskList = () => {
  return (
    <ul className="todo__list">
      <TaskItem />
    </ul>
  )
}

export default TaskList
