import TaskList from '@/components/TaskList'
import AddTaskForm from '@/components/AddTaskForm'
import TodoInfo from '@/components/TodoInfo'
import { useTasks } from '@/hooks/useTasks'
import SearchTaskForm from '@/components/SearchTaskForm'

const App = () => {
  const {
    tasks,
    filteredTasks,
    taskTitle,
    setTaskTitle,
    searchQuery,
    setSearchQuery,
    onAddTaskFormSubmit,
    onDeleteTaskButtonClick,
    onToggleCheckbox,
    onDeleteAllTaskButtonClick,
    onSearchInputChange,
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

      <SearchTaskForm searchQuery={searchQuery} onFieldChange={onSearchInputChange} />

      {/*<form className="todo__form" onSubmit={(event) => event.preventDefault()}>
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
            value={searchQuery}
            onChange={(event) => onSearchInputChange(event)}
          />
        </div>
      </form>*/}
      <TodoInfo tasks={tasks} deleteAllTasks={onDeleteAllTaskButtonClick} />
      <TaskList
        tasks={filteredTasks ?? tasks}
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
