import './SearchTaskForm.scss'
import Field from '@/components/Field'

const SearchTaskForm = (props) => {
  const { searchQuery, setSearchQuery } = props

  return (
    <form className="search-task-form" onSubmit={(event) => event.preventDefault()}>
      <Field
        className="search-task-form__field"
        label="Search task"
        id="search-task"
        autoComplete="false"
        type="search"
        value={searchQuery}
        setValue={onFieldChange}
      />
    </form>
  )
}

export default SearchTaskForm
