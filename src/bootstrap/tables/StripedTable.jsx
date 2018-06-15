import PropTypes from 'prop-types'
import React from 'react'

export default class StripedTable extends React.Component {

  render () {
    let {id} = this.props
    return (
      <table id={id + 'Table'} className='table table-striped' >
        {this.props.children}
      </table >
    )
  }
}

StripedTable.defaultProps = {}

StripedTable.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
