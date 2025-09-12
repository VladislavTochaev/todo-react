import TaskList from '@/components/TaskList'
import AddTaskForm from '@/components/AddTaskForm'
import TodoInfo from '@/components/TodoInfo'
import { useTasks } from '@/hooks/useTasks'

const App = () => {
  const {
    tasks,
    setTasks,
    taskTitle,
    setTaskTitle,
    onAddTaskFormSubmit,
    onDeleteTaskButtonClick,
    onToggleCheckbox,
    onDeleteAllTaskButtonClick,
  } = useTasks([
    {
      id: 'task-1',
      label: 'Task 1',
      isChecked: true,
      isDisappearing: false,
    },
    {
      id: 'task-2',
      label: 'Task 2',
      isChecked: false,
      isDisappearing: false,
    },
  ])

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        addTask={onAddTaskFormSubmit}
        title={taskTitle}
        setTitle={setTaskTitle}
      />
      <form className="todo__form">
        <div className="todo__field field">
          <label className="field__label" htmlFor="search-task">
            Search task
          </label>
          <input
            className="field__input"
            id="search-task"
            placeholder=" "
            autoComplete="off"
            type="search"
          />
        </div>
      </form>
      <TodoInfo tasks={tasks} deleteAllTasks={onDeleteAllTaskButtonClick} />
      <TaskList
        tasks={tasks}
        remove={onDeleteTaskButtonClick}
        toggle={onToggleCheckbox}
      />
      <div className="todo__empty-message">
        {tasks.length === 0 && 'There are no tasks yet'}
      </div>
    </div>
  )
}

export default App
