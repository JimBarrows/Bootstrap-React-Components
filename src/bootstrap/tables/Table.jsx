import PropTypes from 'prop-types'
import React from 'react'

export default class Table extends React.Component {

  static defaultProps = {}

  static propTypes = {
    bordered     : PropTypes.bool,
    borderless   : PropTypes.bool,
    children     : PropTypes.node.isRequired,
    hoverableRows: PropTypes.bool,
    id           : PropTypes.string.isRequired,
    invert       : PropTypes.bool,
    small        : PropTypes.bool,
    striped      : PropTypes.bool
  }

  render() {
    let {bordered, borderless, children, hoverableRows, id, invert, small, striped} = this.props
    let className                                                                   = 'table'
    if (bordered) {
      className += ' table-bordered'
    }
    if (borderless) {
      className += ' table-borderless'
    }
    if (hoverableRows) {
      className += ' table-hover'
    }
    if (invert) {
      className += ' table-dark'
    }
    if (striped) {
      className += ' table-striped'
    }
    if (small) {
      className += ' table-sm'
    }
    return (
      <table id={'Table-' + id} className={className}>
        {children}
      </table>
    )
  }
}

