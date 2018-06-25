import PropTypes from 'prop-types'
import React from 'react'

export default class ProgressBar extends React.Component {
  static propTypes = {
    animated: PropTypes.bool,
    context : PropTypes.oneOf(['primary', 'success', 'info', 'warn', 'danger']),
    height  : PropTypes.number,
    id      : PropTypes.string.isRequired,
    label   : PropTypes.string,
    min     : PropTypes.number.isRequired,
    max     : PropTypes.number.isRequired,
    now     : PropTypes.number.isRequired,
    striped : PropTypes.bool
  }

  static defaultProps = {
    animated: false,
    striped : false
  }


  render() {
    let {animated, context, height, id, label, min, max, now, striped} = this.props

    let currentStyle = {
      width: (100 * (now / max)) + '%',
    }

    if (height) {
      currentStyle['height'] = height + 'px'
    }

    let className = 'progress-bar'

    if (context) {
      className += ' bg-' + context
    }

    if (striped) {
      className += ' progress-bar-striped'
    }

    if (striped && animated) {
      className += ' progress-bar-animated'
    } else if (!striped && animated) {
      className += ' progress-bar-striped'
      className += ' progress-bar-animated'
    }


    return (
      <div id={'ProgressBar-' + id} className={className}
           role={'progressbar'}
           area-valuemax={max}
           area-valuemin={min}
           aria-valuenow={now}
           style={currentStyle}>
        {label}
      </div>
    )
  }
}

