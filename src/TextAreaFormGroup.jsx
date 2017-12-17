import PropTypes from 'prop-types'
import React from 'react'
import RichTextEditor, {createEmptyValue, createValueFromString} from 'react-rte'
import FormGroup from './FormGroup'

export default class TextAreaFormGroup extends React.Component {
  constructor (props) {
    super(props)
    this.setValue(props.value)
    this.state = {
      value: createEmptyValue()
    }
    this.changeThis = this.changeThis.bind(this)
  }

  componentWillReceiveProps (props) {
    this.setValue(props.value)
  }

  changeThis (value) {
    this.setState({value})
    if (this.props.onChange) {
      this.props.onChange(
        {
          target: {
            id: this.props.id,
            value: value.toString('markdown')
          }
        }
      )
    }
  };

  render () {
    let {error, id, label, required} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <RichTextEditor webDriverTestID={id} onChange={this.changeThis} value={this.state.value} />
      </FormGroup >
    )
  }

  setValue (valueString) {
    let value = null
    if (valueString) {
      value = createValueFromString(valueString, 'markdown')
    } else {
      value = createEmptyValue()
    }
    this.state = {
      value
    }
  }
}

TextAreaFormGroup.defaultProps = {
  disabled: false,
  required: false
}

TextAreaFormGroup.propTypes = {

  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string
}
