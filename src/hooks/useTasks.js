import {useCallback, useEffect, useMemo, useState} from 'react'

export const useTasks = (initialState = []) => {
  const [ tasks, setTasks ] = useState(initialState)
  const [ taskTitle, setTaskTitle ] = useState('')
  const [ searchQuery, setSearchQuery ] = useState('')
  const localStorageKey = 'tasks'


  const getTasksFromLocalStorage = () => {
    const rawData = localStorage.getItem(localStorageKey)

    if (!rawData) {
      return []
    }

    try {
      const parsedData = JSON.parse(rawData)
      return Array.isArray(parsedData) ? parsedData : []
    } catch {
      console.log('Tasks parse error')
      return []
    }
  }

  const saveTasksToLocalStorage = () => {
    localStorage.setItem(
      localStorageKey,
      JSON.stringify(tasks)
    )
  }

  const onAddTaskFormSubmit = useCallback((event) => {
    event.preventDefault()

    const titleFormatted = taskTitle.trim()
    if (titleFormatted.length === 0) {
      return
    }

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
  }, [taskTitle])

  const onDeleteTaskButtonClick = (taskId) => {
    // Добавление класса 'is-disappearing' перед удалением элемента
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isDisappearing: true } : task
      )
    )

    setTimeout(() => {
      setTasks((prevTasks) => prevTasks.filter(({ id }) => id !== taskId))
    }, 1000)
  }

  const onToggleCheckbox = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.map((task) =>
      task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
    ))
  }, [])

  const onDeleteAllTaskButtonClick = () => {
    const isConfirmed = confirm('Are you sure you want to delete all?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const onSearchInputChange = useCallback((value) => {
    setSearchQuery(value)
  }, [])

  const filteredTasks = useMemo(() => {
    if (searchQuery.trim().length === 0) {
      return null
    }

    const searchQueryFormatted = searchQuery.toLowerCase()

    return tasks.filter(({label}) => {
      const titleFormatted = label.toLowerCase()

      return titleFormatted.includes(searchQueryFormatted)
    })
  }, [searchQuery, tasks])

  const resetFilter = () => {
    setSearchQuery('')
  }

  useEffect(() => {
    setTasks(getTasksFromLocalStorage())
  }, [])
  
  useEffect(() => {
    saveTasksToLocalStorage()
  }, [tasks])

  return {
    tasks,
    setTasks,
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
  }
}
