import PropTypes from 'prop-types'
import React from 'react'

export default class AddButton extends React.Component {

  static propTypes = {
    id     : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const {id, onClick} = this.props
    return (
      <button type='button' id={'add-button-' + id} onClick={onClick} className='btn btn-success btn-sm'>
        <span className='fas fa-plus'/>
      </button>
    )
  }
}

