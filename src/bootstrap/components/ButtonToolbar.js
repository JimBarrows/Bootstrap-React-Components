import PropTypes from 'prop-types'
import React from 'react'

export default class ButtonToolbar extends React.Component {

  static defaultProps = {
    ariaLabel     : 'Button Toolbar',
    size          : 'medium',
    utilityClasses: ''
  }
  static propTypes    = {
    ariaLabel     : PropTypes.string,
    children      : PropTypes.node.isRequired,
    id            : PropTypes.string.isRequired,
    size          : PropTypes.oneOf(['small', 'medium', 'large']),
    utilityClasses: PropTypes.string
  }

  render() {
    let {ariaLabel, children, id, size, utilityClasses} = this.props
    let cssClasses                                      = 'btn-toolbar'
    if (utilityClasses) {
      cssClasses += ' ' + utilityClasses
    }
    if (size === 'large') {
      cssClasses += ' btn-group-lg'
    } else if (size === 'small') {
      cssClasses += ' btn-group-sm'
    }
    return (
      <div id={'ButtonToolbar-' + id} className={cssClasses} role='toolbar' aria-label={ariaLabel}>
        {children}
      </div>
    )
  }
}


