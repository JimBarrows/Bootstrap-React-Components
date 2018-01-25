import React from 'react'
import ListGroup from '../../src/ListGroup'

const data = [{name: 'Jane', age: 10}, {name: 'John', age: 20}]

export default class ListGroupComponent extends React.Component {

  render () {
    return (
      <div id='ListGroupComponentComponent' >
        <ListGroup id={'List Group Component Test'} itemHeading={item => item.name} items={data}
          itemText={item => item.age} />
      </div >
    )
  }
}
