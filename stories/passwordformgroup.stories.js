import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import PasswordFormGroup from '../src/formgroups/PasswordFormGroup'


storiesOf('Form Groups/Password', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <PasswordFormGroup id={'Default'} label='Password' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <PasswordFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <PasswordFormGroup disabled={true} id={'Disabled'} label={'Password'} onChange={action('Password')} value={''}/>)
  .add('Invalid', () => <PasswordFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Password'} onChange={action('Password')} value={''}/>)
  .add('Valid', () => <PasswordFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Password'} onChange={action('Password')} value={''}/>)
  .add('Required', () => <PasswordFormGroup id={'Required'} label={'Password'} onChange={action('Password')} required={true} value={''}/>)
  .add('Required -  no label', () => <PasswordFormGroup id={'Required'} onChange={action('Password')} required={true} value={''}/>)