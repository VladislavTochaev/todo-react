import './TaskList.scss'
import TaskItem from '@/components/TaskItem'

const TaskList = (props) => {
  const {
    tasks,
    remove,
    toggle
  } = props

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          {...task}
          key={task.id}
          remove={remove}
          toggle={toggle}
        />
      ))}
    </ul>
  )
}

export default TaskList
