import PropTypes from 'prop-types'
import React from 'react'

export default class Jumbotron extends React.Component {

  static defaultProps = {
    fullWidth: false
  }

  static propTypes = {
    fullWidth: PropTypes.bool,
    header   : PropTypes.string,
    id       : PropTypes.string.isRequired,
    lead     : PropTypes.string,
    children : PropTypes.node.isRequired
  }

  render() {
    let {fullWidth, header, id, lead, children} = this.props
    let className                               = 'jumbotron'
    if (fullWidth) {
      className += ' jumbotron-fluid'
    }
    let interior = []
    if (header) {
      interior = [<h1 key={interior.length} className={'display-4'}>{header}</h1>]
    }
    if (lead) {
      interior = [...interior, <p key={interior.length} className={'lead'}>{lead}</p>]
    }
    interior = [...interior, children]
    if (fullWidth) {
      interior = <div className={'container-fluid'}> {interior}</div>
    }
    return (
      <div id={'Jumbotron-' + id} className={className}>
        {interior}
      </div>)
  }
}

