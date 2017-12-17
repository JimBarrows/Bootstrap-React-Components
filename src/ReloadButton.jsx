import PropTypes from 'prop-types'
import React from 'react'

export default class ReloadButton extends React.Component {
  render () {
    let {id, onClick} = this.props
    return (
      <button id={id} type='button' className='btn btn-default btn-xs' onClick={onClick} >
        <span className='glyphicon glyphicon-refresh' />
      </button >
    )
  }
}

ReloadButton.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
