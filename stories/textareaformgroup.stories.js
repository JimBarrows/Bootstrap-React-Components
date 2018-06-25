import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import TextAreaFormGroup from '../src/formgroups/TextAreaFormGroup'


storiesOf('Form Groups/Text Area', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <TextAreaFormGroup id={'Default'} label='TextArea' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <TextAreaFormGroup id={'No label'} onChange={action('default clicked')}
                                       value={''}/>)
  .add('Disabled', () => <TextAreaFormGroup disabled={true} id={'Disabled'} label={'TextArea'} onChange={action('TextArea')}
                                       value={''}/>)
  .add('Invalid', () => <TextAreaFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
                                      label={'TextArea'} onChange={action('TextArea')} value={''}/>)
  .add('Valid', () => <TextAreaFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'TextArea'}
                                    onChange={action('TextArea')} value={''}/>)
  .add('Required', () => <TextAreaFormGroup id={'Required'} label={'TextArea'} onChange={action('TextArea')}
                                       required={true} value={''}/>)
  .add('Required -  no label', () => <TextAreaFormGroup id={'Required'} onChange={action('TextArea')}
                                                   required={true} value={''}/>)