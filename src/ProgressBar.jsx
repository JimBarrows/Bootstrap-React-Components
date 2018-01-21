import PropTypes from 'prop-types'
import React from 'react'

export default class ProgressBar extends React.Component {
  render () {
    let currentStyle = {
      width: this.props.now + '%',
      minWidth: this.props.minWidth + 'em'
    }
    let className = 'progress-bar progress-bar-' + this.props.context + (this.props.striped ? ' progress-bar-striped' : '')
    return (
      <div id={'ProgressBarComponent_' + this.props.id} className='progress' >
        <div
          className={className}
          role={'progressbar'}
          area-valuemax={this.props.max}
          area-valuemin={this.props.min}
          aria-valuenow={this.props.now}
          style={currentStyle} >
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
  now: PropTypes.number.isRequired,
  striped: PropTypes.bool
}

ProgressBar.defaultProps = {
  context: 'default',
  minWidth: 2,
  striped: false
}
