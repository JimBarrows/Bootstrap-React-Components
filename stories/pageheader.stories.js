import {storiesOf} from '@storybook/react'

import React from 'react'
import PageHeader from '../src/PageHeader'


storiesOf('Page Header', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <PageHeader id={'basic'}><h1>Page Header</h1></PageHeader>)
  .add('With muted', () => <PageHeader id={'basic-muted'}><h3>Page Header</h3><small className="text-muted">Small muted text</small></PageHeader>)
