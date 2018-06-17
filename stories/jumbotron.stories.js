import {storiesOf} from '@storybook/react'

import React from 'react'


storiesOf('bootstrap/components/Jumbotron', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('todo', () => <p>To do</p>)