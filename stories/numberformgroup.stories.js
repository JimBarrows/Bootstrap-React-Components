import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import NumberFormGroup from '../src/formgroups/NumberFormGroup'


storiesOf('Form Groups/Number', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <NumberFormGroup id={'Default'} label='Number' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <NumberFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <NumberFormGroup disabled={true} id={'Disabled'} label={'Number'} onChange={action('Number')} value={100}/>)
  .add('Invalid', () => <NumberFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Number'} onChange={action('Number')} value={100}/>)
  .add('Valid', () => <NumberFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Number'} onChange={action('Number')} value={100}/>)
  .add('Required', () => <NumberFormGroup id={'Required'} label={'Number'} onChange={action('Number')} required={true} value={100}/>)
  .add('Required -  no label', () => <NumberFormGroup id={'Required'} onChange={action('Number')} required={true} value={100}/>)