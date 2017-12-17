import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from './FormGroup'

export default class SearchFormGroup extends React.Component {
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
          type='search'
          value={value} />
      </FormGroup >
    )
  }
}

SearchFormGroup.defaultProps = {
  disabled: false,
  required: false
}

SearchFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.bool.isRequired
}
