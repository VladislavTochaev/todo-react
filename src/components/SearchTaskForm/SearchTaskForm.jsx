import './SearchTaskForm.scss'
import Field from '@/components/Field'

const SearchTaskForm = () => {
  return (
    <form className="search-task-form">
      <Field
        label="Search task"
        id="search-task"
        autoComplete="false"
        type="search"
      />
    </form>
  )
}

export default SearchTaskForm
