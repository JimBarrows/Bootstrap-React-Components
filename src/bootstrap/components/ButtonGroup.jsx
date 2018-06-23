import PropTypes from 'prop-types'
import React from 'react'

export default class ButtonGroup extends React.Component {

  static defaultProps = {
    ariaLabel     : 'Button Group',
    utilityClasses: ''
  }

  static propTypes = {
    ariaLabel     : PropTypes.string,
    children      : PropTypes.node.isRequired,
    id            : PropTypes.string.isRequired,
    utilityClasses: PropTypes.string
  }

  render() {
    let {ariaLabel, children, id, utilityClasses} = this.props
    let cssClasses                                = 'btn-group'
    if (utilityClasses) {
      cssClasses += ' ' + utilityClasses
    }
    return (
      <div id={'ButtonGroup-' + id} className={cssClasses} role='group' aria-label={ariaLabel}>
        {children}
      </div>
    )
  }
}


