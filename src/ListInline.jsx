import PropTypes from 'prop-types'
import React from 'react'

export default class ListInline extends React.Component {

  render () {
    return <span id={this.props.id + 'ListInline'} >
      <ul className='list-inline' >
        {this.props.list.map((item, index) => <li key={index} >{this.props.display(item)}</li >)}
      </ul >
    </span >
  }
}

ListInline.propTypes = {
  display: PropTypes.func.required,
  id: PropTypes.string.required,
  list: PropTypes.array.required
}

ListInline.defaultProps = {}
