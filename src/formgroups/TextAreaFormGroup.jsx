import FormGroup from '../bootstrap/forms/FormGroup'
import PropTypes from 'prop-types'
import React from 'react'
import RichTextEditor, {createValueFromString} from 'react-rte'

export default class TextAreaFormGroup extends React.Component {
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

  constructor(props) {
    super(props)
    this.state    = {
      value: createValueFromString(props.value, 'markdown')
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(value) {
    this.setState({value})
    if (this.props.onChange) {
      this.props.onChange(
        {
          target:
            {
              id   : this.props.id,
              value: value.toString('markdown')
            }
        }
      )
    }
  }

  render() {
    let {disabled, id, label, onChange, required, value, valid, validationMessage} = this.props
    let componentId = `TextAreaFormGroup-${id}`
    let className                                                                  = 'form-control'
    if( validationMessage) {
      className += valid ? " is-valid" : " is-invalid"
    }
    return <FormGroup id={componentId} label={label} required={required} valid={valid}
                      validationMessage={validationMessage}>
      <RichTextEditor
        className={className}
        disabled={disabled}
        onChange={this.onChange}
        value={this.state.value}
        webDriverTestID={componentId}
      />
    </FormGroup>
  }
}
