import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class ColorFormGroup extends React.Component {
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

  render() {
    let {disabled, id, label, onChange, required, value, valid, validationMessage} = this.props
    let className                                                                 = 'form-control'
    if( validationMessage) {
      className += valid ? ' is-valid' : ' is-invalid'
    }
    return (
      <FormGroup id={'Color-' + id} label={label}  required={required} valid={valid} validationMessage={validationMessage}>
        <input checked={value}
               className={className}
               disabled={disabled}
               id={id}
               name={id}
               onChange={onChange}
               type='color'
               value={value}
        />
      </FormGroup>
    )
  }
}

