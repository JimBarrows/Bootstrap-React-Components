import {storiesOf} from '@storybook/react'

import React from 'react'
import Badge from '../src/bootstrap/components/Badge'
import BadgePill from '../src/bootstrap/components/BadgePill'

storiesOf('bootstrap/components/Badge', module)
  .addDecorator((story) =>
    <div className="container">
      {story()}
    </div>)
  .add('primary', () => <Badge id={'primary'} context={'primary'}>This is a badge</Badge>)
  .add('secondary', () => <Badge id={'secondary'} context={'secondary'}>This is a badge</Badge>)
  .add('success', () => <Badge id={'success'} context={'success'}>This is a badge</Badge>)
  .add('danger', () => <Badge id={'danger'} context={'danger'}>This is a badge</Badge>)
  .add('warning', () => <Badge id={'warning'} context={'warning'}>This is a badge</Badge>)
  .add('info', () => <Badge id={'info'} context={'info'}>This is a badge</Badge>)
  .add('light', () => <Badge id={'light'} context={'light'}>This is a badge</Badge>)
  .add('dark', () => <Badge id={'dark'} context={'dark'}>This is a badge</Badge>)

storiesOf('bootstrap/components/BadgePill', module)
  .addDecorator((story) =>
    <div className="container">
      {story()}
    </div>)
  .add('primary', () => <BadgePill id={'primary'} context={'primary'}>This is a badge</BadgePill>)
  .add('secondary', () => <BadgePill id={'secondary'} context={'secondary'}>This is a badge</BadgePill>)
  .add('success', () => <BadgePill id={'success'} context={'success'}>This is a badge</BadgePill>)
  .add('danger', () => <BadgePill id={'danger'} context={'danger'}>This is a badge</BadgePill>)
  .add('warning', () => <BadgePill id={'warning'} context={'warning'}>This is a badge</BadgePill>)
  .add('info', () => <BadgePill id={'info'} context={'info'}>This is a badge</BadgePill>)
  .add('light', () => <BadgePill id={'light'} context={'light'}>This is a badge</BadgePill>)
  .add('dark', () => <BadgePill id={'dark'} context={'dark'}>This is a badge</BadgePill>)

