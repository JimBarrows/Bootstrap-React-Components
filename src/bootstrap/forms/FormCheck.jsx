import PropTypes from 'prop-types'
import React from 'react'

export default class FormCheck extends React.Component {

  static defaultProps = {
    inline: false
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired,
    inline  : PropTypes.bool
  }

  render() {
    let {children, id, inline} = this.props
    let className              = 'form-check'
    if (inline) {
      className += ' form-check-inline'
    }
    return (
      <div id={'FormCheck-' + id} className={className}>
        {children}
      </div>
    )
  }
}

