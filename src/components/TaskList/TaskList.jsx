import './TaskList.scss'
import TaskItem from '@/components/TaskItem'

const TaskList = () => {
  return (
    <ul className="task-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  )
}

export default TaskList
