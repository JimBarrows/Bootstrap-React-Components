import PropTypes from 'prop-types'
import React from 'react'
import FormControl from '../bootstrap/forms/FormControl'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class EmailFormGroup extends React.Component {

  static defaultProps = {}

  static propTypes = {
    disabled   : PropTypes.bool,
    id         : PropTypes.string.isRequired,
    label      : PropTypes.string,
    onChange   : PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required   : PropTypes.bool,
    value      : PropTypes.string.isRequired,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render() {
    let {disabled, id, label, onChange, placeholder, required, value, valid, validationMessage} = this.props
    let componentId = `EmailFormGroup-${id}`
    return (
      <FormGroup id={componentId} label={label}  required={required} valid={valid} validationMessage={validationMessage}>
        <FormControl disabled={disabled} id={componentId} onChange={onChange} type={'email'} valid={valid}
                     validated={validationMessage} value={value}/>
      </FormGroup>
    )
  }
}
