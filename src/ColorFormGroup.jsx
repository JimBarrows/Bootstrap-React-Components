import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from './FormGroup'

export default class ColorFormGroup extends React.Component {
  render () {
    let {disabled, error, id, label, onChange, required, value} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <input checked={value}
          className='form-control'
          disabled={disabled}
          id={id}
          onChange={onChange}
          required={required}
          type='color'
          value={value}
        />
      </FormGroup >
    )
  }
}

ColorFormGroup.defaultProps = {
  disabled: false,
  required: false
}

ColorFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
}