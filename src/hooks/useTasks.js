import { useState } from 'react'

export const useTasks = (initialState = []) => {
  const [tasks, setTasks] = useState(initialState)
  const [taskTitle, setTaskTitle] = useState('')

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
        },
      ])
      setTaskTitle('')
    }
  }

  const onDeleteTaskButtonClick = (taskId) => {
    // Добавление класса 'is-disappearing' перед удалением элемента
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isDisappearing: true } : task
      )
    )

    setTimeout(() => {
      setTasks([...tasks.filter(({ id }) => id !== taskId)])
    }, 400)
  }

  const onToggleCheckbox = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    )
  }

  const onDeleteAllTaskButtonClick = () => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  return {
    tasks,
    setTasks,
    taskTitle,
    setTaskTitle,
    onAddTaskFormSubmit,
    onDeleteTaskButtonClick,
    onToggleCheckbox,
    onDeleteAllTaskButtonClick,
  }
}
