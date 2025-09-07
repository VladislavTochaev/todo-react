import './AddTaskForm.scss'
import Field from '@/components/Field'
import Button from '@/components/Button'

const AddTaskForm = () => {
  return (
    <form className="add-task-form">
      <Field label="New task title" id="new-task" />
      <Button className="add-task-form__button" type="submit" label="Add" />
    </form>
  )
}

export default AddTaskForm
