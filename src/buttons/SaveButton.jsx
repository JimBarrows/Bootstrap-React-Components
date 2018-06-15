import PropTypes from 'prop-types'
import React from 'react'

export default class SaveButton extends React.Component {
  static propTypes = {
    id     : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render () {
    let {id, onClick} = this.props
    return (
      <button id={'save-button-' + id} type='button' className='btn btn-light btn-small' onClick={onClick}>
        <span className='far fa-save'/>
      </button >
    )
  }
}


