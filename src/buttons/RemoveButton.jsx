import PropTypes from 'prop-types'
import React from 'react'

export default class RemoveButton extends React.Component {

  render () {
    let {id, onClick} = this.props
    return (
      <button id={'remove_button_' + id} type='button' className='btn btn-danger btn-xs' onClick={onClick} >
        <span className='glyphicon glyphicon-remove' />
      </button >
    )
  }
}

RemoveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
