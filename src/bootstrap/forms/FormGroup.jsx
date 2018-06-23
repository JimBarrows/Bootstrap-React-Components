import PropTypes from 'prop-types'
import React from 'react'
import Alert from '../components/Alert'

export default class FormGroup extends React.Component {
  static defaultProps = {
    required: false
  }

  static  propTypes = {
    children: PropTypes.node.isRequired,
    error   : PropTypes.string,
    id      : PropTypes.string.isRequired,
    label   : PropTypes.string,
    required: PropTypes.bool
  }

  render() {
    let {error, id, label, required} = this.props
    let cssClasses                   = 'form-group'
    let requiredText                 = ''
    let alert                        = ''
    if (error) {
      cssClasses += ' has-error'
      alert = (<Alert id={id} type='danger'>{error}</Alert>)
    }
    let childrenWithProps = this.props.children
    if (required) {
      requiredText      = (<small className='text-danger'>Required</small>)
      childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {required: true})
      )
    }

    return (
      <div id={'FormGroup-' + id} className={cssClasses}>
        <label id={'FormGroupLabel-' + id} className='control-label' htmlFor={id}>{label}&nbsp;{requiredText}</label>
        {childrenWithProps}
        {alert}
      </div>
    )
  }
}

