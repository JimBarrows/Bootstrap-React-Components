import PropTypes from 'prop-types'
import React from 'react'
import DatePicker from 'react-datetime'
import FormGroup from './FormGroup'

require('react-datetime/css/react-datetime.css')

export default class DateRangeFormGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fromName: 'dateRange_' + this.props.id + '_From',
      thruName: 'dateRange_' + this.props.id + '_Thru'
    }

    this.fromChange = this.fromChange.bind(this)
    this.thruChange = this.thruChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState(
      {
        fromName: 'dateRange_' + nextProps.id + '_From',
        thruName: 'dateRange_' + nextProps.id + '_Thru'
      }
    )
  }

  fromChange (selectedDate) {
    this.props.onChange(
      {
        target: {
          id: this.state.fromName,
          value: selectedDate
        }
      }
    )
  }

  thruChange (selectedDate) {
    this.props.onChange(
      {
        target: {
          id: this.state.thruName,
          value: selectedDate
        }
      }
    )
  }

  render () {
    let {dateFormat, error, fromValue, id, label, required, thruValue} = this.props
    let requiredText = ''
    if (required) {
      requiredText = (<small className='text-danger' >Required</small >)
    }
    return (

      <FormGroup error={error} id={id} label={label} required={required} >
        <div className='row' >
          <div className='col-md-6' >
            <label className='control-label' htmlFor={this.state.fromName} >From {requiredText}</label >
            <DatePicker id={this.state.fromName} name={this.state.fromName} value={fromValue}
              onChange={this.fromChange} dateFormat={dateFormat} timeFormat={false} />
          </div >
          <div className='col-md-6' >
            <label className='control-label' htmlFor={this.state.thruName} >Thru {requiredText}</label >
            <DatePicker id={this.state.thruName} name={this.state.thruName} value={thruValue}
              onChange={this.thruChange} dateFormat={dateFormat} timeFormat={false} />
          </div >
        </div >
      </FormGroup >
    )
  }
}

DateRangeFormGroup.defaultProps = {
  disabled: false,
  required: false
}

DateRangeFormGroup.propTypes = {
  dateFormat: PropTypes.bool,
  error: PropTypes.string,
  fromValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  thruValue: PropTypes.string.isRequired
}
