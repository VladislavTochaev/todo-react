import './Button.scss'
import Icon from '@/components/Icon'
import clsx from 'clsx'

const Button = (props) => {
  const {
    className,
    type = 'button',
    label,
    isLabelHidden = false,
    /*
     * '' (default) | 'transparent'
     * */
    mode = '',
    isDisabled = false,
    onClick,
    iconName,
    /*
     * 'before' | 'after'
     * */
    iconPosition = 'before',
    hasFillIcon,
  } = props

  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <button
      className={clsx(className, 'button', mode && `button--${mode}`)}
      type={type}
      title={title}
      aria-label={title}
      disabled={isDisabled}
      onClick={onClick}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === 'after' && iconComponent}
    </button>
  )
}

export default Button
