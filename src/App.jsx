import {useState} from 'react'
import TaskList from '@/components/TaskList'
import AddTaskForm from '@/components/AddTaskForm'
import TodoInfo from '@/components/TodoInfo'

const App = () => {
  const [ tasks, setTasks] = useState([
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
  const [ taskTitle, setTaskTitle ] = useState('')

  const onAddTaskFormSubmit = (event) => {
    event.preventDefault()

    const titleFormatted = taskTitle.trim()
    if (titleFormatted.length > 0) {
      setTasks([
        ...tasks,
        {
          id: crypto?.randomUUID() ?? Date.now().toString(),
          label: titleFormatted,
          isChecked: false,
        }
      ])
      setTaskTitle('')
    }
  }

  const onDeleteTaskButtonClick = (taskId) => {
    // Добавление класса 'is-disappearing' перед удалением элемента
    setTasks(tasks.map((task) => task.id === taskId ? {...task, isDisappearing: true} : task))

    setTimeout(() => {
      setTasks([...tasks.filter(({id}) => id !== taskId )])
    }, 400)
  }

  const onToggleCheckbox = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, isChecked: !task.isChecked} : task))
  }

  const onDeleteAllTaskButtonClick = () => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={onAddTaskFormSubmit} title={taskTitle} setTitle={setTaskTitle} />
      <form className="todo__form">
        <div className="todo__field field">
          <label
            className="field__label"
            htmlFor="search-task"
          >
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
      <TaskList tasks={tasks} remove={onDeleteTaskButtonClick} toggle={onToggleCheckbox}/>
      <div className="todo__empty-message">
        {tasks.length === 0 && (
          'There are no tasks yet'
        )}
      </div>
    </div>
  )
}

export default App