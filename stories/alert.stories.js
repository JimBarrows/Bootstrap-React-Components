import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import Alert from '../src/components/Alert'

storiesOf('components/Alert', module)
  .add('primary', () => <Alert id={'primary'} type={'primary'}>This is an alert</Alert>)
  .add('secondary', () => <Alert id={'secondary'} type={'secondary'}>This is an alert</Alert>)
  .add('success', () => <Alert id={'success'} type={'success'}>This is an alert</Alert>)
  .add('danger', () => <Alert id={'danger'} type={'danger'}>This is an alert</Alert>)
  .add('warning', () => <Alert id={'warning'} type={'warning'}>This is an alert</Alert>)
  .add('info', () => <Alert id={'info'} type={'info'}>This is an alert</Alert>)
  .add('light', () => <Alert id={'light'} type={'light'}>This is an alert</Alert>)
  .add('dark', () => <Alert id={'dark'} type={'dark'}>This is an alert</Alert>)
  .add('with dismiss button', () => <Alert id={'primary'} type={'primary'} onDismiss={action('clicked')}>This is an
                                                                                                         alert</Alert>)
