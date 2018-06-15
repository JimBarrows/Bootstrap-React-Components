import PropTypes from 'prop-types'
import React from 'react'

export default class AddButton extends React.Component {
  render () {
    const {id, onClick} = this.props
    return (
      <button type='button' id={id} onClick={onClick} className='btn btn-success btn-xs' >
        <span className='glyphicon glyphicon-plus' />
      </button >
    )
  }
}

AddButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
