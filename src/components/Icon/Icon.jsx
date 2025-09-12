import './Icon.scss'
import clsx from 'clsx'

const Icon = (props) => {
  const {
    className,
    name,
    hasFill = false,
    ariaLabel
  } = props

  return (
    <span className={clsx('icon', className)} aria-label={ariaLabel}>
      <svg
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      >
        <use href={`/src/assets/icons/sprite.svg#${name}`} />
      </svg>
    </span>
  )
}

export default Icon
