import PropTypes from 'prop-types'
import React from 'react'
import RichTextEditor, {createValueFromString} from 'react-rte'
import FormGroup from './FormGroup'

export default class TextAreaFormGroup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: createValueFromString(props.value, 'markdown')
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (value) {
    this.setState({value})
    if (this.props.onChange) {
      this.props.onChange(
        {
          target:
            {
              value: value.toString('markdown')
            }
        }
      )
    }
  }

  render () {
    let {disabled, error, id, label, placeholder, required} = this.props
    return (
      <FormGroup label={label} id={id} error={error} required={required} >
        <RichTextEditor
          disabled={disabled}
          onChange={this.onChange}
          placeholder={placeholder}
          value={this.state.value}
          webDriverTestID={id}
        />
      </FormGroup >
    )
  }
}

TextAreaFormGroup.defaultProps = {
  disabled: false,
  placeholder: '',
  required: false
}

TextAreaFormGroup.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
}
