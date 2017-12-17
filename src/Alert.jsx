import PropTypes from 'prop-types'
import React from 'react'

export default class Alert extends React.Component {
  render () {
    const {
      children,
      onDismiss,
      id,
      type,
      message
    } = this.props

    let Alert = null
    let dismissButton = ''
    let dismissClass = ''
    if (onDismiss) {
      dismissButton =
        <button id={'dismiss_button_' + id} onClick={onDismiss} type='button' className='close' data-dismiss='alert'
          aria-label='Close' >
          <span aria-hidden='true' >&times;</span >
        </button >
      dismissClass = 'alert-dismissible'
    }

    if (message) {
      Alert = (
        <div id={'alert_' + id} className={'alert ' + dismissClass + ' alert-' + type}
          role='alert' >{dismissButton}{message}</div >
      )
    } else {
      Alert = (
        <div id={'alert_' + id} className={'alert ' + dismissClass + ' alert-' + type}
          role='alert' >{dismissButton}{children}</div >
      )
    }
    return Alert
  }
}

Alert.defaultProps = {
  type: 'info'
}

Alert.propTypes = {
  children: PropTypes.node,
  onDismiss: PropTypes.func,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  message: PropTypes.string.isRequired
}
