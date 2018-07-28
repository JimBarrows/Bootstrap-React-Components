import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class CheckboxFormGroup extends React.Component {
  static defaultProps = {}

  static propTypes = {
    checked          : PropTypes.bool.isRequired,
    disabled         : PropTypes.bool,
    id               : PropTypes.string.isRequired,
    label            : PropTypes.string,
    onChange         : PropTypes.func.isRequired,
    required         : PropTypes.bool,
    value            : PropTypes.string.isRequired,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render() {
    let {checked, disabled, id, label, onChange, required, value, valid, validationMessage} = this.props
    let className                                                                           = 'form-check-input'
    let validationMessageTag                                                                = ''
    let attributes                                                                          = {}
    let labelTag                                                                            = ''
    let componentId                                                                         = `CheckboxFormGroup-${id}`
    if (validationMessage) {
      className += valid ? ' is-valid' : ' is-invalid'
      validationMessageTag = <div className={valid ? 'valid-feedback' : 'invalid-feedback'}>{validationMessage}</div>
    }
    if (required) {
      attributes['required'] = true
    }
    if (label && required) {
      labelTag = <label id={'FormGroupLabel-' + componentId} className={'form-check-label'} htmlFor={id}>{label}&nbsp;
        <small className='text-danger'>Required</small>
      </label>
    } else if (label && !required) {
      labelTag = <label id={'FormGroupLabel-' + componentId} className={'form-check-label'} htmlFor={id}>{label}</label>
    } else if (!label && required) {
      labelTag = <label id={'FormGroupLabel-' + componentId} className={'form-check-label'} htmlFor={id}>
        <small className='text-danger'>Required</small>
      </label>
    }
    return (
      <FormGroup id={componentId} valid={valid} validationMessage={validationMessage}>
        <div className='form-check'>
          <input checked={checked} className={className} disabled={disabled} id={`Checkbox-${componentId}`} onChange={onChange} type='checkbox'
                 value={value} {...attributes}/>
          {labelTag}
          {validationMessageTag}
        </div>
      </FormGroup>
    )
  }
}
