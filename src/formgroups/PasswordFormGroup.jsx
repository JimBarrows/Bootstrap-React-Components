import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class PasswordFormGroup extends React.Component {
  render () {
    let {disabled, error, id, label, onChange, placeholder, required, value} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <input className='form-control'
          disabled={disabled}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type='password'
          value={value} />
      </FormGroup >
    )
  }
}

PasswordFormGroup.defaultProps = {
  disabled: false,
  required: false
}

PasswordFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
}
