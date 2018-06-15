import PropTypes from 'prop-types'
import React from 'react'

export default class SaveButton extends React.Component {
  render () {
    let {id, onClick} = this.props
    return (
      <button id={'save_button_' + id} type='button' className='btn btn-default btn-xs' onClick={onClick} >
        <span className='glyphicon glyphicon-ok' />
      </button >
    )
  }
}

SaveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
