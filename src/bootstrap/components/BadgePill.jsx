import PropTypes from 'prop-types'
import React from 'react'

export default class Badge extends React.Component {
  static defaultProps = {
    type: 'info'
  }

  static propTypes = {
    children: PropTypes.node,
    id      : PropTypes.string.isRequired,
    type    : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning'])
  }

  render() {
    const {
            children,
            id,
            type
          } = this.props


    return <div id={'badge_' + id} className={'badge badge-pill badge-' + type}>{children}</div>
  }
}