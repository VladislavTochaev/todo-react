import './EmptyMessage.scss'

const EmptyMessage = (props) => {
  const { tasks, filteredTasks } = props

  const isEmptyFilteredTasks = filteredTasks?.length === 0
  const isEmptyTasks = tasks.length === 0

  return (
    <div className="empty-message">
      {
        isEmptyFilteredTasks ? 'Tasks not found'
        : isEmptyTasks ? 'There are no tasks yet'
          : ''
      }
    </div>
  )
}

export default EmptyMessage