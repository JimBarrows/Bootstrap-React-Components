import {storiesOf} from '@storybook/react'

import React from 'react'
import Panel from '../src/panels/Panel'
import PanelBody from '../src/panels/PanelBody'
import PanelFooter from '../src/panels/PanelFooter'
import PanelHeader from '../src/panels/PanelHeader'
import PanelTitle from '../src/panels/PanelTitle'


storiesOf('Panels', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () =>
    <Panel id={'basic'}>
      <PanelBody id={'basic'}>
        Basic panel example
      </PanelBody>
    </Panel>)
  .add('With heading and without title', () =>
    <Panel id={'heading'}>
      <PanelHeader id={'heading'}>
        Panel heading without title
      </PanelHeader>
      <PanelBody id={'heading'}>
        Heading panel example
      </PanelBody>
    </Panel>)
  .add('With heading and with title', () =>
    <Panel id={'headingAndTitle'}>
      <PanelHeader id={'headingAndTitle'}>
        <PanelTitle id={'headingAndTitle'}>
          Panel heading with title
        </PanelTitle>
      </PanelHeader>
      <PanelBody id={'headingAndTitle'}>
        Heading with title panel example
      </PanelBody>
    </Panel>)
  .add('With footer', () =>
    <Panel id={'footer'}>
      <PanelBody id={'footer'}>
        Panel with footer
      </PanelBody>
      <PanelFooter id={'footer'}/>
    </Panel>)
  .add('With contexts', () =>
    <div>
      <Panel id={'dangerContext'} context={'danger'}>
        <PanelHeader id={'dangerContext'}>
          Panel with danger context
        </PanelHeader>
        <PanelBody id={'dangerContext'}>
          Panel with danger context
        </PanelBody>
      </Panel>
      <Panel id={'darkContext'} context={'dark'}>
        <PanelHeader id={'darkContext'}>
          Panel with dark context
        </PanelHeader>
        <PanelBody id={'darkContext'}>
          Panel with dark context
        </PanelBody>
      </Panel>
      <Panel id={'infoContext'} context={'info'}>
        <PanelHeader id={'infoContext'}>
          Panel with info context
        </PanelHeader>
        <PanelBody id={'infoContext'}>
          Panel with info context
        </PanelBody>
      </Panel>
      <Panel id={'lightContext'} context={'light'}>
        <PanelHeader id={'lightContext'}>
          Panel with light context
        </PanelHeader>
        <PanelBody id={'lightContext'}>
          Panel with light context
        </PanelBody>
      </Panel>
      <Panel id={'primaryContext'} context={'primary'}>
        <PanelHeader id={'primaryContext'}>
          Panel with primary context
        </PanelHeader>
        <PanelBody id={'primaryContext'}>
          Panel with primary context
        </PanelBody>
      </Panel>
      <Panel id={'secondaryContext'} context={'secondary'}>
        <PanelHeader id={'secondaryContext'}>
          Panel with secondary context
        </PanelHeader>
        <PanelBody id={'secondaryContext'}>
          Panel with secondary context
        </PanelBody>
      </Panel>
      <Panel id={'successContext'} context={'success'}>
        <PanelHeader id={'successContext'}>
          Panel with success context
        </PanelHeader>
        <PanelBody id={'successContext'}>
          Panel with success context
        </PanelBody>
      </Panel>
      <Panel id={'warningContext'} context={'warning'}>
        <PanelHeader id={'warningContext'}>
          Panel with warning context
        </PanelHeader>
        <PanelBody id={'warningContext'}>
          Panel with warning context
        </PanelBody>
      </Panel>
    </div>)
