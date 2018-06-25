import {storiesOf} from '@storybook/react'

import React from 'react'
import ListGroup from '../src/bootstrap/components/ListGroup/index'


storiesOf('bootstrap/components/List Group', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <ListGroup id={'basic'}>
    <span>This is item 1</span>
    <span>This is item 2</span>
  </ListGroup>)
  .add('With active item', () => <ListGroup id={'basic'} active={1}>
    <span>This is item 1</span>
    <span>This is item 2</span>
  </ListGroup>)
  .add('Flush', () => <ListGroup id={'basic'} active={1} flush={true}>
    <span>This is item 1</span>
    <span>This is item 2</span>
  </ListGroup>)