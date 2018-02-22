import React from 'react'
import {ColorFormGroup, PasswordFormGroup, RangeFormGroup, TextAreaFormGroup} from '../../src'
import TextFormGroup from '../../src/TextFormGroup'

export default class SupportedControls extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      passwordFormGroupValue: '',
      colorFormGroupValue: '',
      rangeFormGroupValue: '',
      textAreaFormGroupValue: '',
      textFormGroupValue: ''
    }
  }

  render () {
    return (
      <div id={'SupportedControlsComponent'} >
        <form >
          <ColorFormGroup id={'colorFormGroupTest'} label='Color Form Group'
            onChange={e => this.setState({colorFormGroupValue: e.target.value})}
            value={this.state.colorFormGroupValue} />
          <p >Color Form Group value: <span id={'colorFormGroupValue'} >{this.state.colorFormGroupValue}</span ></p >
          <RangeFormGroup id={'rangeFormGroupTest'} label={'Range Form Group'}
            onChange={e => this.setState({rangeFormGroupValue: e.target.value})}
            value={this.state.rangeFormGroupValue} />
          <p >Range Form Group value: <span id={'rangeFormGroupValue'} >{this.state.rangeFormGroupValue}</span ></p >
          <PasswordFormGroup id={'passwordFormGroupTest'} label={'Password From Group'}
            onChange={e => this.setState({passwordFormGroupValue: e.target.value})}
            value={this.state.passwordFormGroupValue} />
          <p >Password value: <span id={'passwordValue'} >{this.state.passwordFormGroupValue}</span ></p >
          
          <TextFormGroup id={'textFormGroupTest'} label={'Text form Group'}
            onChange={e => this.setState({textFormGroupValue: e.target.value})}
            required
            value={this.state.textFormGroupValue} />
          <TextAreaFormGroup id='textAreaFormGroupTest' label='Text Area Form Group'
            onChange={e => this.setState({textAreaFormGroupValue: e.target.value})}
            value={this.state.textAreaFormGroupValue} />
          <p >Text Area Form Group value: <span
            id={'textAreaFormGroupValue'} >{this.state.textAreaFormGroupValue}</span >
          </p >
        </form >
      </div >
    )
  }
}

SupportedControls.propTypes = {}

SupportedControls.defaultProps = {}