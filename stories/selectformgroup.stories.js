import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import SelectFormGroup from '../src/formgroups/SelectFormGroup'

let options = [
  {label: 'key1', value: 'value1'},
  {label: 'key2', value: 'value2'},
  {label: 'key3', value: 'value3'},
]

storiesOf('Form Groups/Select', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <SelectFormGroup id={'Default'} label='Select' onChange={action('default clicked')}
                                         options={options} value={''}/>)
  .add('No label', () => <SelectFormGroup id={'No label'} onChange={action('default clicked')} options={options}
                                          value={''}/>)
  .add('Disabled', () => <SelectFormGroup disabled={true} id={'Disabled'} label={'Select'} onChange={action('Select')}
                                          options={options} value={''}/>)
  .add('Invalid', () => <SelectFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
                                         label={'Select'} onChange={action('Select')} options={options} value={''}/>)
  .add('Valid', () => <SelectFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Select'}
                                       onChange={action('Select')} options={options} value={''}/>)
  .add('Required', () => <SelectFormGroup id={'Required'} label={'Select'} onChange={action('Select')} options={options}
                                          required={true} value={''}/>)
  .add('Required -  no label', () => <SelectFormGroup id={'Required'} onChange={action('Select')} options={options}
                                                      required={true} value={''}/>)