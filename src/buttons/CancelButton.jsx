import PropTypes from 'prop-types'
import React from 'react'

export default class CancelButton extends React.Component {
  render () {
    let {id, onClick} = this.props
    return (
      <button id={'cancel_button_' + id} type='button' className='btn btn-default btn-xs' onClick={onClick} >
        <span className='glyphicon glyphicon-ban-circle' />
      </button >
    )
  }
}

CancelButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
