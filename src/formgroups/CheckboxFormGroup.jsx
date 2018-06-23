import PropTypes from 'prop-types'
import React from 'react'
import Alert from '../bootstrap/components/Alert'
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
    value            : PropTypes.bool.isRequired,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render() {
    let {checked, disabled, id, label, onChange, required, value, valid, validationMessage} = this.props
    let className                                                                 = 'form-check-input'
    let alert                                                                     = ''
    let attributes                                                                = {}
    if (validationMessage) {
      className += valid ? ' is-valid' : ' is-invalid'
      alert = <div className={valid ? 'valid-feedback' : 'invalid-feedback'}>{validationMessage}</div>
    }
    if(required) {
      attributes['required']=true
    }
    return (
      <FormGroup id={'Checkbox-' + id}>
        <div className='form-check'>
          <input checked={checked} className={className} disabled={disabled} id={id} onChange={onChange} type='checkbox'
                 value={value} {...attributes}/>
          <label className={'form-check-label'}>{label}</label>
          {alert}
        </div>
      </FormGroup>
    )
  }
}

