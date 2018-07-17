import PropTypes from 'prop-types'
import React from 'react'
import AppendAddon from './AppendAddon'
import PrependAddon from './PrependAddon'

export default class InputGroup extends React.Component {

  static defaultProps = {
    size: 'medium'
  }

  static propTypes = {
    appendText : PropTypes.string,
    children   : PropTypes.node.isRequired,
    id         : PropTypes.string.isRequired,
    prependText: PropTypes.string,
    size       : PropTypes.oneOf(['small', 'medium', 'large'])
  }

  render() {
    let {appendText, children, id, prependText, size} = this.props
    let prependComponent                              = ''
    let appendComponent                               = ''
    if (prependText) {
      prependComponent = <PrependAddon id={id}>{prependText}</PrependAddon>
    }
    if (appendText) {
      appendComponent = <AppendAddon id={id}>{appendText}</AppendAddon>
    }

    let className = 'input-group mb-3'
    switch (size) {
      case 'small':
        className += ' input-group-sm'
        break
      case 'large':
        className += ' input-group-lg'
        break
    }
    return (
      <div id={'InputGroup-' + id} className={className}>
        {prependComponent}
        {children}
        {appendComponent}
      </div>
    )
  }
}

