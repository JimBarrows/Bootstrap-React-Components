import PropTypes from 'prop-types'
import React from 'react'
import FormControl from '../bootstrap/forms/FormControl'
import FormGroup from '../bootstrap/forms/FormGroup'


export default class DateRangeFormGroup extends React.Component {
  static defaultProps = {}

  static propTypes = {
    disabled         : PropTypes.bool,
    fromDate         : PropTypes.node,
    id               : PropTypes.string.isRequired,
    label            : PropTypes.string,
    onChange         : PropTypes.func.isRequired,
    required         : PropTypes.bool,
    thruDate         : PropTypes.node,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }


  constructor(props) {
    super(props)
  }


  render() {
    let {disabled, fromDate, id, label, onChange, required, thruDate, valid, validationMessage} = this.props
    let validationMessageTag                                                                    = ''
    let componentId = `DateRangeFormGroup-${id}`
    if (validationMessage) {
      validationMessageTag = <div id={`${componentId}-validationMessage`} className={valid ? 'valid-feedback' : 'invalid-feedback'}>{validationMessage}</div>
    }
    return (

      <FormGroup id={componentId} label={label} required={required} >
        <div className='row'>
          <div className='col'>
            <FormControl disabled={disabled} id={`${componentId}-From`} onChange={onChange} placeholder={'From Date'}
                         type={'datetime-local'} valid={valid}
                         validated={validationMessage ? true : false} value={fromDate}/>
            {validationMessageTag}
          </div>
          <div className='col'>
            <FormControl disabled={disabled} id={`${componentId}-Thru`} onChange={onChange} placeholder={'Thru Date'}
                         type={'datetime-local'} valid={valid}
                         validated={validationMessage ? true : false} value={thruDate}/>
          </div>
        </div>
      </FormGroup>
    )
  }
}
