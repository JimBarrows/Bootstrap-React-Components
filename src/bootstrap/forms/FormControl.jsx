import PropTypes from 'prop-types'
import React from 'react'

export default class FormControl extends React.Component {

  static defaultProps = {
    disabled: false,
    readOnly: false,
    required: false,
    size    : 'medium'
  }

  static propTypes = {
    cssClass   : PropTypes.string,
    disabled   : PropTypes.bool,
    id         : PropTypes.string.isRequired,
    max        : PropTypes.number,
    min        : PropTypes.number,
    onChange   : PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    readOnly   : PropTypes.bool,
    required   : PropTypes.bool,
    size       : PropTypes.oneOf(['small', 'medium', 'large']),
    type       : PropTypes.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden',
      'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time',
      'url', 'week']).isRequired,
    value      : PropTypes.string.isRequired,
    valid      : PropTypes.bool,
    validated  : PropTypes.bool
  }

  render() {
    let {cssClass, disabled, id, max, min, onChange, placeholder, readOnly, required, size, type, valid, validated, value} = this.props

    let className = 'form-control'

    switch (type) {
      case 'range':
        className = 'form-control-range'
        break
      case 'file':
        className = 'form-control-file'
        break
      case 'checkbox':
      case 'radio' :
        className = 'form-check-input'
        break
    }

    if (cssClass) {
      className += ' ' + cssClass
    }

    if (validated) {
      className += valid ? ' is-valid' : ' is-invalid'
    }

    let attributes = {}
    switch (type) {
      case 'button':
      case 'reset':
      case 'search':
      case 'submit':
        attributes['onClick'] = onChange
        break
      default:
        attributes['onChange'] = onChange
    }

    switch (type) {
      case 'checkbox':
        attributes['checked'] = value
        break
      case 'range':
        attributes['max'] = max ? max : 100
        attributes['min'] = min ? min : 0
        break

    }

    if ('small' === size) {
      className += ' form-control-sm'
    } else if ('large' === size) {
      className += ' form-control-lg'
    }

    return (
      <input {...attributes}
             className={className}
             disabled={disabled}
             id={'form-control-' + id}
             name={'id'}
             placeholder={placeholder}
             readOnly={readOnly}
             required={required}
             type={type}
             value={value}/>
    )
  }
}

