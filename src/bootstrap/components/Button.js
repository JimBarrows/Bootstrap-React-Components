import PropTypes from 'prop-types'
import React from 'react'

export default class Button extends React.Component {
  static defaultProps = {
    block         : false,
    disabled      : false,
    outline       : false,
    size          : 'medium',
    context       : 'light',
    utilityClasses: ''
  }

  static propTypes = {
    block         : PropTypes.bool,
    children      : PropTypes.node.isRequired,
    disabled      : PropTypes.bool,
    id            : PropTypes.string.isRequired,
    onClick       : PropTypes.func,
    outline       : PropTypes.bool,
    size          : PropTypes.oneOf(['small', 'medium', 'large']),
    context       : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'link', 'primary', 'secondary', 'success', 'warning']),
    utilityClasses: PropTypes.string
  }

  render() {
    let {block, context, disabled, outline, id, onClick, size, utilityClasses} = this.props
    let cssClasses                                                             = 'btn'
    let attributes                                                             = {}
    cssClasses += (outline ? ' outline-' : ' btn-')
    if (context) {
      cssClasses += ' btn-' + context
    }
    switch (size) {
      case 'small':
        cssClasses += ' btn-sm'
        break
      case 'large':
        cssClasses += ' btn-lg'
        break
    }

    cssClasses += block ? ' btn-block' : ''

    if (disabled) {
      cssClasses += ' disabled'
      attributes['disabled']      = true
      attributes['aria-disabled'] = true
    }
    if (utilityClasses) {
      cssClasses += ' ' + utilityClasses
    }

    if (onClick) {
      attributes = Object.assign({}, attributes, {onClick: onClick})
    }
    return (
      <button id={'button-' + id} context='button' className={cssClasses} onClick={onClick} {...attributes}>
        {this.props.children}
      </button>
    )
  }
}


