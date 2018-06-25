import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import RangeFormGroup from '../src/formgroups/RangeFormGroup'


storiesOf('Form Groups/Range', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <RangeFormGroup id={'Default'} label='Range' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <RangeFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <RangeFormGroup disabled={true} id={'Disabled'} label={'Range'} onChange={action('Range')} value={''}/>)
  .add('Invalid', () => <RangeFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Range'} onChange={action('Range')} value={''}/>)
  .add('Valid', () => <RangeFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Range'} onChange={action('Range')} value={''}/>)
  .add('Required', () => <RangeFormGroup id={'Required'} label={'Range'} onChange={action('Range')} required={true} value={''}/>)
  .add('Required -  no label', () => <RangeFormGroup id={'Required'} onChange={action('Range')} required={true} value={''}/>)