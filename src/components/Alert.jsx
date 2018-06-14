import PropTypes from 'prop-types'
import React from 'react'

export default class Alert extends React.Component {
  static defaultProps = {
    type: 'info'
  }

  static propTypes = {
    children : PropTypes.node,
    onDismiss: PropTypes.func,
    id       : PropTypes.string.isRequired,
    type     : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning'])
  }

  render() {
    const {
            children,
            onDismiss,
            id,
            type
          } = this.props

    let Alert         = null
    let dismissButton = ''
    let dismissClass  = ''
    if (onDismiss) {
      dismissButton =
        <button id={'dismiss_button_' + id} onClick={onDismiss} type='button' className='close' data-dismiss='alert'
                aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      dismissClass  = 'alert-dismissible'
    }

    return <div id={'alert_' + id} className={'alert ' + dismissClass + ' alert-' + type}
                role='alert'>{dismissButton}{children}</div>
  }
}

