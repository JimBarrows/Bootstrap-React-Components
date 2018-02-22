import PropTypes from 'prop-types'
import React from 'react'

export default class EditableCell extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      edit: props.edit
    }
  }

  componentWillReceiveProps (props) {
    this.setState(
      {
        edit: props.edit
      }
    )
  };

  render () {
    let {disabled, id, onChange, placeholder, required, type, value} = this.props
    let input = this.state.edit
      ? <input
        className='form-control'
        disabled={disabled}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value} />
      : <span id={id + 'Value'} >{value}</span >
    return (<td id={id + 'Cell'} >{input}</td >)
  }
}

EditableCell.defaultProps = {
  disabled: false,
  required: false
}

EditableCell.propTypes = {
  disabled: PropTypes.bool,
  edit: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'radio', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week']),
  value: PropTypes.string.isRequired
}
