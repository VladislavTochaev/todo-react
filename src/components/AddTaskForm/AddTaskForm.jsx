import './AddTaskForm.scss'
import Field from '@/components/Field'
import Button from '@/components/Button'

const AddTaskForm = (props) => {
  const {
    addTask,
    title,
    setTitle
  } = props

  return (
    <form className="add-task-form" onSubmit={addTask}>
      <Field
        className="add-task-form__field"
        label="New task title"
        id="new-task"
        value={title}
        setValue={setTitle}
      />
      <Button
        className="add-task-form__button"
        type="submit"
        label="Add"
        isDisabled={title.length === 0}
      />
    </form>
  )
}

export default AddTaskForm
