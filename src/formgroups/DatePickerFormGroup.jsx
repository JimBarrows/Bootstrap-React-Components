import PropTypes from 'prop-types'
import React from 'react'
import DatePicker from 'react-datetime'
import FormGroup from './FormGroup'

require('react-datetime/css/react-datetime.css')

export default class DatePickerFormGroup extends React.Component {
  render () {
    let {error, id, label, onChange, required, value} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <DatePicker id={id} value={value} onChange={onChange} />
      </FormGroup >
    )
  }
}

DatePickerFormGroup.defaultProps = {
  disabled: false,
  required: false
}

DatePickerFormGroup.propTypes = {
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
}
