import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import Alert from '../src/bootstrap/components/Alert'

storiesOf('bootstrap/components/Alert', module)
  .addDecorator((story) =>
    <div className="container">
      {story()}
    </div>)
  .add('primary', () => <Alert id={'primary'} context={'primary'}>This is an alert</Alert>)
  .add('secondary', () => <Alert id={'secondary'} context={'secondary'}>This is an alert</Alert>)
  .add('success', () => <Alert id={'success'} context={'success'}>This is an alert</Alert>)
  .add('danger', () => <Alert id={'danger'} context={'danger'}>This is an alert</Alert>)
  .add('warning', () => <Alert id={'warning'} context={'warning'}>This is an alert</Alert>)
  .add('info', () => <Alert id={'info'} context={'info'}>This is an alert</Alert>)
  .add('light', () => <Alert id={'light'} context={'light'}>This is an alert</Alert>)
  .add('dark', () => <Alert id={'dark'} context={'dark'}>This is an alert</Alert>)
  .add('with dismiss button', () => <Alert id={'primary'} context={'primary'} onDismiss={action('clicked')}>This is an
                                                                                                         alert</Alert>)
