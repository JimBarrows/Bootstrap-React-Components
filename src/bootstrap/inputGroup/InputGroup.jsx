import PropTypes from 'prop-types'
import React from 'react'

export default class InputGroup extends React.Component {

  static defaultProps = {}

  static propTypes = {
    appendText : PropTypes.string,
    children   : PropTypes.node.isRequired,
    id         : PropTypes.string.isRequired,
    prependText: PropTypes.string
  }

  render() {
    let {appendText, children, id, prependText} = this.props
    let prependComponent                        = ''
    let appendComponent                         = ''
    if (prependText) {
      prependComponent = <div className='input-group-prepend'>
        <span className='input-group-text' id={'InputGroup-Prepend-Addon-' + id}>{prependText}</span>
      </div>
    }
    if (appendText) {
      appendComponent = <div className='input-group-append'>
        <span className='input-group-text' id={'InputGroup-Append-Addon-' + id}>{appendText}</span>
      </div>
    }
    return (
      <div id={'InputGroup-' + id} className='input-group mb-3'>
        {prependComponent}
        {children}
        {appendComponent}
      </div>
    )
  }
}

