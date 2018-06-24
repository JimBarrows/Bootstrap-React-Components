import PropTypes from 'prop-types'
import React from 'react'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class SelectFormGroup extends React.Component {
  static defaultProps = {}

  static propTypes = {
    disabled         : PropTypes.bool,
    id               : PropTypes.string.isRequired,
    label            : PropTypes.string,
    onChange         : PropTypes.func.isRequired,
    options          : PropTypes.arrayOf(PropTypes.shape({
      label  : PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired,
    required         : PropTypes.bool,
    value            : PropTypes.string.isRequired,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render() {
    let {disabled, id, label, onChange, options, required, value, valid, validationMessage} = this.props
    let className = 'form-control'
    if (validationMessage) {
      className += valid ? ' is-valid' : ' is-invalid'
    }
    return (
      <FormGroup id={'Select-' + id} label={label} required={required} valid={valid}
                 validationMessage={validationMessage}>
        <select className={className} disabled={disabled} id={id} onChange={onChange}
                required={required} value={value}>
          <option value='-1'/>
          {options.map(o => <option key={o.value}
                                    value={o.value}>{o.label}</option>)}
        </select>
      </FormGroup>
    )
  }
}
