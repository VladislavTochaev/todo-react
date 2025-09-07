import './AddTaskForm.scss'
import Field from '@/components/Field'

const AddTaskForm = () => {
  return (
    <form className="add-task-form">
      <Field label="New task title" id="new-task" />
      <button className="button">Add</button>
    </form>
  )
}

export default AddTaskForm
