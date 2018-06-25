import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import TelFormGroup from '../src/formgroups/TelFormGroup'


storiesOf('Form Groups/Tel', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <TelFormGroup id={'Default'} label='Tel' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <TelFormGroup id={'No label'} onChange={action('default clicked')}
                                       value={''}/>)
  .add('Disabled', () => <TelFormGroup disabled={true} id={'Disabled'} label={'Tel'} onChange={action('Tel')}
                                       value={''}/>)
  .add('Invalid', () => <TelFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
                                      label={'Tel'} onChange={action('Tel')} value={''}/>)
  .add('Valid', () => <TelFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Tel'}
                                    onChange={action('Tel')} value={''}/>)
  .add('Required', () => <TelFormGroup id={'Required'} label={'Tel'} onChange={action('Tel')}
                                       required={true} value={''}/>)
  .add('Required -  no label', () => <TelFormGroup id={'Required'} onChange={action('Tel')}
                                                   required={true} value={''}/>)