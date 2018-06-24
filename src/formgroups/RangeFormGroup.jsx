import PropTypes from 'prop-types'
import React from 'react'
import FormControl from '../bootstrap/forms/FormControl'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class RangeFormGroup extends React.Component {
  static defaultProps = {}

  static propTypes = {
    disabled         : PropTypes.bool,
    id               : PropTypes.string.isRequired,
    label            : PropTypes.string,
    max              : PropTypes.number.isRequired,
    min              : PropTypes.number.isRequired,
    step             : PropTypes.number.isRequired,
    onChange         : PropTypes.func.isRequired,
    required         : PropTypes.bool,
    value            : PropTypes.string.isRequired,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render() {
    let {disabled, id, label, max, min, onChange, required, step, value, valid, validationMessage} = this.props
    return (
      <FormGroup id={'Color-' + id} label={label} required={required} valid={valid}
                 validationMessage={validationMessage}>
        <FormControl disabled={disabled} id={id} onChange={onChange} max={max} min={min} step={step} type={'range'}
                     valid={valid}
                     validated={validationMessage} value={value}/>
      </FormGroup>
    )
  }
}

