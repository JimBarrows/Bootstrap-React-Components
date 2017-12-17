import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from './FormGroup'

export default class SelectFormGroup extends React.Component {
  render () {
    let {disabled, error, id, label, onChange, options, required, value} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <select className='form-control' disabled={disabled} id={id} onChange={onChange}
          required={required} value={value} >
          <option value='-1' />
          {options.map(o => <option key={o.value}
            value={o.value} >{o.label}</option >)}
        </select >
      </FormGroup >
    )
  }
}

SelectFormGroup.defaultProps = {
  disabled: false,
  required: false
}

SelectFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  required: PropTypes.bool,
  value: PropTypes.bool.isRequired
}
