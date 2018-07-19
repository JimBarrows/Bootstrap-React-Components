import PropTypes from 'prop-types'
import React from 'react'
import ListGroupItem from './ListGroupItem'

export default class ListGroup extends React.Component {

  static defaultProps = {
    active : -1,
    context: '',
    flush  : false
  }
  static propTypes    = {
    active  : PropTypes.number,
    children: PropTypes.node.isRequired,
    flush   : PropTypes.bool,
    id      : PropTypes.string.isRequired,
    context : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning'])
  }

  render() {
    let {active, children, context, flush, id} = this.props
    let className                              = 'list-group'
    if (flush) {
      className += ' list-group-flush'
    }
    if (context) {

    }
    return <ul className={className}>
      {React.Children.map(children, (i, idx) => <ListGroupItem key={idx} active={active === idx}
                                                               id={`${id}-${idx}`}>{i}</ListGroupItem>)}
    </ul>

  }
}


