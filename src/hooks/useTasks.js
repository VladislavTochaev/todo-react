import {useEffect, useState} from 'react'

export const useTasks = (initialState = []) => {
  const [ tasks, setTasks ] = useState(initialState)
  const [ filteredTasks, setFilteredTasks ] = useState(null)
  const [ taskTitle, setTaskTitle ] = useState('')
  const [ searchQuery, setSearchQuery ] = useState('')

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

    resetFilter()
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

  useEffect(() => {
    filterTasks()
  }, [searchQuery, tasks])

  const onSearchInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const filterTasks = () => {
    const searchQueryFormatted = searchQuery.toLowerCase()

    setFilteredTasks([...tasks.filter(({label}) => {
      const titleFormatted = label.toLowerCase()
      return titleFormatted.includes(searchQueryFormatted)
    })])
  }

  const resetFilter = () => {
    setSearchQuery('')
  }

  return {
    tasks,
    setTasks,
    filteredTasks,
    setFilteredTasks,
    taskTitle,
    setTaskTitle,
    searchQuery,
    setSearchQuery,
    onAddTaskFormSubmit,
    onDeleteTaskButtonClick,
    onToggleCheckbox,
    onDeleteAllTaskButtonClick,
    onSearchInputChange,
  }
}
