import PropTypes from 'prop-types'
import React from 'react'

export default class PageHeader extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
  }

  render () {
    let {id} = this.props
    return (
      <div id={'PageHeader-' +id} className='pb-2 mt-4 mb-2 border-bottom' >
        {this.props.children}
      </div >
    )
  }
}

