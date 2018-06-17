import PropTypes from 'prop-types'
import React from 'react'

export default class FormControl extends React.Component {

  static defaultProps = {
    disabled: false,
    required: false
  }

  static propTypes = {
    cssClass   : PropTypes.string,
    disabled   : PropTypes.bool,
    id         : PropTypes.string.isRequired,
    max        : PropTypes.number,
    min        : PropTypes.number,
    onChange   : PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required   : PropTypes.bool,
    type       : PropTypes.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden',
      'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time',
      'url', 'week']).isRequired,
    value      : PropTypes.string.isRequired
  }

  render() {
    let {cssClass, disabled, id, max, min, onChange, placeholder, required, type, value} = this.props
    if (cssClass) {
      cssClass = 'form-control ' + cssClass
    } else {
      cssClass = 'form-control'
    }
    let attributes = {}
    if (('button' === type) || ('reset' === type) || ('search' === type) || ('submit' === type)) {
      attributes['onClick'] = onChange
    } else if ('checkbox' === type) {
      attributes['checked']  = value
      attributes['onChange'] = onChange
    } else if ('range' === type) {
      attributes['max'] = max ? max : 100
      attributes['min'] = min ? min : 0
    } else {
      attributes['onChange'] = onChange
    }


    return (
      <input {...attributes}
             className={cssClass}
             disabled={disabled}
             id={'form-control-' + id}
             name={'id'}
             placeholder={placeholder}
             required={required}
             type={type}
             value={value}/>
    )
  }
}

