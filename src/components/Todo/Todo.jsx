import './Todo.scss'
import TaskList from '@/components/TaskList'
import AddTaskForm from '@/components/AddTaskForm'
import TodoInfo from '@/components/TodoInfo'
import { useTasks } from '@/hooks/useTasks'
import SearchTaskForm from '@/components/SearchTaskForm'
import EmptyMessage from '@/components/EmptyMessage'

const Todo = () => {
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
      <TodoInfo tasks={tasks} deleteAllTasks={onDeleteAllTaskButtonClick} />
      <TaskList
        tasks={filteredTasks ?? tasks}
        remove={onDeleteTaskButtonClick}
        toggle={onToggleCheckbox}
      />
      <EmptyMessage tasks={tasks} filteredTasks={filteredTasks} />
    </div>
  )
}

export default Todo
