import {storiesOf} from '@storybook/react'

import React from 'react'
import Badge from '../src/components/Badge'

storiesOf('components/Badge', module)
  .add('primary', () => <Badge id={'primary'} type={'primary'}>This is a badge</Badge>)
  .add('secondary', () => <Badge id={'secondary'} type={'secondary'}>This is a badge</Badge>)
  .add('success', () => <Badge id={'success'} type={'success'}>This is a badge</Badge>)
  .add('danger', () => <Badge id={'danger'} type={'danger'}>This is a badge</Badge>)
  .add('warning', () => <Badge id={'warning'} type={'warning'}>This is a badge</Badge>)
  .add('info', () => <Badge id={'info'} type={'info'}>This is a badge</Badge>)
  .add('light', () => <Badge id={'light'} type={'light'}>This is a badge</Badge>)
  .add('dark', () => <Badge id={'dark'} type={'dark'}>This is a badge</Badge>)

