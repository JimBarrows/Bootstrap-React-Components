import PropTypes from 'prop-types'
import React from 'react'
import Alert from './components/Alert'

export default class FormGroup extends React.Component {
  render () {
    let {error, id, label, required} = this.props
    let validationStatus = ''
    let requiredText = ''
    let alert = ''
    if (error) {
      validationStatus = 'has-error'
      alert = <Alert id={id} type='danger' message={error} />
    }
    let childrenWithProps = this.props.children
    if (required) {
      requiredText = (<small className='text-danger' >Required</small >)
      childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {required: true})
      )
    }

    return (
      <div id={id + 'FormGroup'} className={'form-group ' + validationStatus} >
        <label id={id + 'Label'} className='control-label' htmlFor={id} >{label}&nbsp;{requiredText}</label >
        {childrenWithProps}
        {alert}
      </div >
    )
  }
}

FormGroup.defaultProps = {
  required: false
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool
}
