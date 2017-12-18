import PropTypes from 'prop-types'
import React from 'react'
import Alert from './Alert'

export default class CheckboxFormGroup extends React.Component {
  render () {
    let {disabled, error, id, label, onChange, placeholder, required, value} = this.props
    let validationStatus = ''
    let requiredText = ''
    let alert = ''
    if (error) {
      validationStatus = 'has-error'
      alert = <Alert id={id} type='error' message={error} />
    }
    if (required) {
      requiredText = (<small className='text-deanger' >Required</small >)
    }
    return (
      <div id={id + 'FormGroup'} className={'form-group ' + validationStatus} >
        <label id={id + 'Label'} >
          <input checked={value}
            disabled={disabled}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            type='checkbox'
            value={id}
          />
          {label} {requiredText}
        </label >
        {alert}
      </div >
    )
  }
}

CheckboxFormGroup.defaultProps = {
  disabled: false,
  required: false
}

CheckboxFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.bool.isRequired
}
