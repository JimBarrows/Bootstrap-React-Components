import {storiesOf} from '@storybook/react'

import React from 'react'


storiesOf('Page Header', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('todo', () => <p>To do</p>)
