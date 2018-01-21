import PropTypes from 'prop-types'
import React from 'react'

export default class ProgressBar extends React.Component {
  render () {
    return (
      <div id={'ProgressBarComponent_' + this.props.id} className='progress' >
        <div className={'progress-bar progress-bar-' + this.props.context} role={'progressbar'}
          aria-valuenow={this.props.now}
          area-valuemin={this.props.min} area-valuemax={this.props.max}
          style={{width: this.props.now + '%', minWidth: this.props.minWidth + 'em'}} >
          {this.props.label}
        </div >
      </div >
    )
  }
}

ProgressBar.propTypes = {
  context: PropTypes.oneOf(['primary', 'success', 'info', 'warn', 'danger', 'default']),
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  min: PropTypes.number.isRequired,
  minWidth: PropTypes.number,
  max: PropTypes.number.isRequired,
  now: PropTypes.number.isRequired
}

ProgressBar.defaultProps = {
  context: 'default',
  mindWidth: 2
}
