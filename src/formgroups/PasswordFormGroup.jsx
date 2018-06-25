import PropTypes from 'prop-types'
import React from 'react'
import FormControl from '../bootstrap/forms/FormControl'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class PasswordFormGroup extends React.Component {

  static defaultProps = {}

  static propTypes = {
    disabled         : PropTypes.bool,
    id               : PropTypes.string.isRequired,
    label            : PropTypes.string,
    onChange         : PropTypes.func.isRequired,
    required         : PropTypes.bool,
    value            : PropTypes.string.isRequired,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render () {
    let {disabled, id, label, onChange, required, value, valid, validationMessage} = this.props
    return (
      <FormGroup id={'Password-' + id} label={label}  required={required} valid={valid} validationMessage={validationMessage}>
        <FormControl disabled={disabled} id={id} onChange={onChange} type={'password'} valid={valid}
                     validated={validationMessage} value={value}/>
      </FormGroup>
    )
  }
}
