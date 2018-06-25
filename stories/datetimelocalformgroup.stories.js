import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import DateTimeLocalFormGroup from '../src/formgroups/DateTimeLocalFormGroup'


storiesOf('Form Groups/Date Time Local', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <DateTimeLocalFormGroup id={'Default'} label='Date' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <DateTimeLocalFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <DateTimeLocalFormGroup disabled={true} id={'Disabled'} label={'Date'} onChange={action('Date')} value={'checkbox'}/>)
  .add('Invalid', () => <DateTimeLocalFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Date'} onChange={action('Date')} value={'checkbox'}/>)
  .add('Valid', () => <DateTimeLocalFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Date'} onChange={action('Date')} value={'checkbox'}/>)
  .add('Required', () => <DateTimeLocalFormGroup id={'Required'} label={'Date'} onChange={action('Date')} required={true} value={'checkbox'}/>)
  .add('Required -  no label', () => <DateTimeLocalFormGroup id={'Required'} onChange={action('Date')} required={true} value={'checkbox'}/>)