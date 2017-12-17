import PropTypes from 'prop-types'
import React from 'react'

export default class EditButton extends React.Component {
  render () {
    let {id, onClick} = this.props
    return (
      <button id={'edit_button_' + id} type='button' className='btn btn-default btn-xs' onClick={onClick} >
        <span className='glyphicon glyphicon-pencil' />
      </button >
    )
  }
}

EditButton.defaultProps = {
  disabled: false,
  required: false
}

EditButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
