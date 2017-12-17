import PropTypes from 'prop-types'
import React from 'react'

export default class PageHeader extends React.Component {
  render () {
    let {id} = this.props
    return (
      <div id={id + 'PageHeader'} className='page-header' >
        {this.props.children}
      </div >
    )
  }
}

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
