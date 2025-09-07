import './Field.scss'

const Field = (props) => {
  const { label, id, autoComplete = '', type = 'text' } = props

  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete={autoComplete}
        type={type}
      />
    </div>
  )
}

export default Field
