import {storiesOf} from '@storybook/react'

import React from 'react'
import Progress from '../src/bootstrap/components/Progress'
import ProgressBar from '../src/bootstrap/components/ProgressBar'


storiesOf('bootstrap/components/Progress', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <Progress id={'basic'}>
    <ProgressBar id={'basic'} min={0} max={100} now={50}/>
  </Progress>)
  .add('Labels', () =>
    <Progress id={'basic'}>
      <ProgressBar id={'basic'} min={0} max={100} now={50} label={"label"}/>
    </Progress>)
  .add('Height', () =>
    <Progress id={'height'} height={60}>
      <ProgressBar id={'height'} height={60} min={0} max={100} now={50}/>
    </Progress>)
  .add('Backgrounds', () => <div>
    <Progress id={'success'}>
      <ProgressBar context={'success'} id={'success'} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'info'}>
      <ProgressBar context={'info'} id={'info'} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'warning'}>
      <ProgressBar context={'warning'} id={'warning'} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'danger'}>
      <ProgressBar context={'danger'} id={'danger'} min={0} max={100} now={50}/>
    </Progress>
  </div>)
  .add('Multiple bars', () =>
    <Progress id={'multipleBars'}>
      <ProgressBar context={'success'} id={'bar1'} min={0} max={100} now={20}/>
      <ProgressBar context={'info'} id={'bar2'} min={0} max={100} now={40}/>
      <ProgressBar context={'warning'} id={'bar3'} min={0} max={100} now={80}/>
    </Progress>)
  .add('Striped', () => <div>
    <Progress id={'striped-success'}>
      <ProgressBar context={'success'} id={'striped-success'} striped={true} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'striped-info'}>
      <ProgressBar context={'info'} id={'striped-info'} striped={true} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'striped-warning'}>
      <ProgressBar context={'warning'} id={'striped-warning'} striped={true} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'striped-danger'}>
      <ProgressBar context={'danger'} id={'striped-danger'} striped={true} min={0} max={100} now={50}/>
    </Progress>
  </div>)
  .add('Animated', () => <div>
    <Progress id={'animated-success'}>
      <ProgressBar context={'success'} id={'animated-success'} animated={true} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'animated-info'}>
      <ProgressBar context={'info'} id={'animated-info'} animated={true} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'animated-warning'}>
      <ProgressBar context={'warning'} id={'animated-warning'} animated={true} min={0} max={100} now={50}/>
    </Progress>
    <Progress id={'animated-danger'}>
      <ProgressBar context={'danger'} id={'animated-danger'} animated={true} min={0} max={100} now={50}/>
    </Progress>
  </div>)
