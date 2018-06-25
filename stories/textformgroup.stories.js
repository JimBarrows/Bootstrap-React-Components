import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import TextFormGroup from '../src/formgroups/TextFormGroup'


storiesOf('Form Groups/Text', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <TextFormGroup id={'Default'} label='Text' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <TextFormGroup id={'No label'} onChange={action('default clicked')}
                                       value={''}/>)
  .add('Disabled', () => <TextFormGroup disabled={true} id={'Disabled'} label={'Text'} onChange={action('Text')}
                                       value={''}/>)
  .add('Invalid', () => <TextFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
                                      label={'Text'} onChange={action('Text')} value={''}/>)
  .add('Valid', () => <TextFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Text'}
                                    onChange={action('Text')} value={''}/>)
  .add('Required', () => <TextFormGroup id={'Required'} label={'Text'} onChange={action('Text')}
                                       required={true} value={''}/>)
  .add('Required -  no label', () => <TextFormGroup id={'Required'} onChange={action('Text')}
                                                   required={true} value={''}/>)