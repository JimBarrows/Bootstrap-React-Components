import {storiesOf} from '@storybook/react'

import React from 'react'
import Badge from '../src/bootstrap/components/Badge'
import BadgePill from '../src/bootstrap/components/BadgePill'

storiesOf('bootstrap/components/Badge', module)
  .add('primary', () => <Badge id={'primary'} type={'primary'}>This is a badge</Badge>)
  .add('secondary', () => <Badge id={'secondary'} type={'secondary'}>This is a badge</Badge>)
  .add('success', () => <Badge id={'success'} type={'success'}>This is a badge</Badge>)
  .add('danger', () => <Badge id={'danger'} type={'danger'}>This is a badge</Badge>)
  .add('warning', () => <Badge id={'warning'} type={'warning'}>This is a badge</Badge>)
  .add('info', () => <Badge id={'info'} type={'info'}>This is a badge</Badge>)
  .add('light', () => <Badge id={'light'} type={'light'}>This is a badge</Badge>)
  .add('dark', () => <Badge id={'dark'} type={'dark'}>This is a badge</Badge>)

storiesOf('bootstrap/components/BadgePill', module)
  .add('primary', () => <BadgePill id={'primary'} type={'primary'}>This is a badge</BadgePill>)
  .add('secondary', () => <BadgePill id={'secondary'} type={'secondary'}>This is a badge</BadgePill>)
  .add('success', () => <BadgePill id={'success'} type={'success'}>This is a badge</BadgePill>)
  .add('danger', () => <BadgePill id={'danger'} type={'danger'}>This is a badge</BadgePill>)
  .add('warning', () => <BadgePill id={'warning'} type={'warning'}>This is a badge</BadgePill>)
  .add('info', () => <BadgePill id={'info'} type={'info'}>This is a badge</BadgePill>)
  .add('light', () => <BadgePill id={'light'} type={'light'}>This is a badge</BadgePill>)
  .add('dark', () => <BadgePill id={'dark'} type={'dark'}>This is a badge</BadgePill>)

