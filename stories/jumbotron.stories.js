import {storiesOf} from '@storybook/react'

import React from 'react'
import Jumbotron from '../src/bootstrap/components/Jumbotron'


storiesOf('bootstrap/components/Jumbotron', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <Jumbotron id={'bassic'} header={'Hello, World!'} lead={'This is a hero unit'}>
    <p>Use it for anything.</p>
  </Jumbotron>)
  .add('FullWidth', () => <Jumbotron id={'jumbotron'} fullWidth={true} header={'Hello, World!'}
                                     lead={'This is a hero unit'}>
    <p>Use it for anything.</p>
  </Jumbotron>)