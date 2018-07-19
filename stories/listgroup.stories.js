import {storiesOf} from '@storybook/react'

import React from 'react'
import ListGroup from '../src/bootstrap/components/ListGroup/index'


storiesOf('bootstrap/components/List Group', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <ListGroup id={'basic'}>
    <span>This is item 1</span>
    <span>This is item 2</span>
  </ListGroup>)
  .add('Single Item', () => <ListGroup id={'single-item'}>
    <span>This is item 1</span>
  </ListGroup>)
  .add('No Item', () => <ListGroup id={'no-item'}>
  </ListGroup>)
  .add('With active item', () => <ListGroup id={'active-item'} active={1}>
    <span>This is item 1</span>
    <span>This is item 2</span>
  </ListGroup>)
  .add('Flush', () => <ListGroup id={'flush'} active={1} flush={true}>
    <span>This is item 1</span>
    <span>This is item 2</span>
  </ListGroup>)