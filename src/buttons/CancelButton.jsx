import PropTypes from 'prop-types'
import React from 'react'

export default class CancelButton extends React.Component {
  render () {
    let {id, onClick} = this.props
    return (
      <button id={'cancel-button-' + id} type='button' className='btn btn-light btn-sm' onClick={onClick}>
        <span className='fas fa-ban'/>
      </button >
    )
  }
}

CancelButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
