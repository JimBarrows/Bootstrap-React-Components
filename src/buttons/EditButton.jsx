import PropTypes from 'prop-types'
import React from 'react'

export default class EditButton extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id     : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    let {id, onClick} = this.props
    return (
      <button id={'edit-button-' + id} type='button' className='btn btn-light btn-sm' onClick={onClick}>
        <span className='far fa-edit'/>
      </button>
    )
  }
}


