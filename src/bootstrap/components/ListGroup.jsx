import PropTypes from 'prop-types'
import React from 'react'
import Card from './Card'

export default class ListGroup extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    header  : PropTypes.string,
    id      : PropTypes.string.isRequired,
    width   : PropTypes.string
  }

  render() {
    let {children, header, id, width} = this.props
    return (
      <Card id={'ListGroup-' + id} width={width}>
        {header ? <div className={'card-header'}>{header}</div> : ''}
        <ul className={'list-group list-group-flush'}>
          {children.map((i, idx) => <li key={idx} id={`list-group-item-${id}-${idx}`}
                                        className={'list-group-item'}>{i}</li>)}
        </ul>
      </Card>
    )
  }
}


