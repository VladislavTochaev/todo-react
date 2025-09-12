import './Field.scss'
import clsx from 'clsx'

const Field = (props) => {
  const {
    className,
    label,
    id,
    autoComplete,
    type = 'text',
    value,
    setValue,
  } = props

  return (
    <div className={clsx(className, 'field')}>
      <label className="field__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="field__input"
        id={id}
        placeholder=" "
        autoComplete={autoComplete}
        type={type}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}

export default Field
