import PropTypes from 'prop-types'
import React from 'react'

export default class Button extends React.Component {
  static defaultProps = {
    block   : false,
    disabled: false,
    outline : false,
    size    : '',
    type    : 'info'
  }

  static propTypes = {
    block   : PropTypes.bool,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    id      : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
    outline : PropTypes.bool,
    size    : PropTypes.oneOf(['small', 'large']),
    type    : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'link', 'primary', 'secondary', 'success', 'warning'])
  }

  render() {
    let {block, disabled, outline, id, onClick, size, type} = this.props
    let cssClasses                                          = 'btn'
    let attributes                                          = {}
    cssClasses += (outline ? ' outline-' : ' btn-')
    cssClasses += type
    if (size) {
      if (size === 'small') {
        cssClasses += ' btn-sm'
      } else if (size === 'large') {
        cssClasses += ' btn-lg'
      }
    }
    cssClasses += block ? ' btn-block' : ''
    if (disabled) {
      cssClasses += ' disabled'
      attributes['disabled']      = true
      attributes['aria-disabled'] = true
    }
    return (
      <button id={'button-' + id} type='button' className={cssClasses} onClick={onClick} {...attributes}>
        {this.props.children}
      </button>
    )
  }
}


