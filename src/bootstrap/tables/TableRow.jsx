import PropTypes from 'prop-types'
import React from 'react'

export default class TableRow extends React.Component {

  static defaultProps = {
    id: ''
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    context : PropTypes.oneOf(['active', 'danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning']),
    id      : PropTypes.string
  }

  render() {
    let {children, context, id} = this.props
    let className               = ''

    if(context) {
      className += ' table-' + context
    }

    let attributes = {}

    if (className) {
      attributes['className'] = className
    }

    return (
      <tr id={'TableRow-' + id} {...attributes}>
        {children}
      </tr>
    )
  }
}

