import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import EmailFormGroup from '../src/formgroups/EmailFormGroup'


storiesOf('Form Groups/Email', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <EmailFormGroup id={'Default'} label='Email' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <EmailFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <EmailFormGroup disabled={true} id={'Disabled'} label={'Email'} onChange={action('Email')} value={'checkbox'}/>)
  .add('Invalid', () => <EmailFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Email'} onChange={action('Email')} value={'checkbox'}/>)
  .add('Valid', () => <EmailFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Email'} onChange={action('Email')} value={'checkbox'}/>)
  .add('Required', () => <EmailFormGroup id={'Required'} label={'Email'} onChange={action('Email')} required={true} value={'checkbox'}/>)
  .add('Required -  no label', () => <EmailFormGroup id={'Required'} onChange={action('Email')} required={true} value={'checkbox'}/>)