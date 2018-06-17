import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class RangeFormGroup extends React.Component {
  render () {
    let {disabled, error, id, label, max, min, onChange, placeholder, required, step, value} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <input className='form-control'
          disabled={disabled}
          id={id}
          max={max}
          min={min}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          step={step}
          type='range'
          value={value} />
      </FormGroup >
    )
  }
}

RangeFormGroup.defaultProps = {
  disabled: false,
  max: 100,
  min: 0,
  required: false,
  step: 1
}

RangeFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  step: PropTypes.number,
  value: PropTypes.string.isRequired
}
