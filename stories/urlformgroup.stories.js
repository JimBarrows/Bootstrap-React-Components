import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import UrlFormGroup from '../src/formgroups/UrlFormGroup'


storiesOf('Form Groups/Url', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <UrlFormGroup id={'Default'} label='Url' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <UrlFormGroup id={'No label'} onChange={action('default clicked')}
                                       value={''}/>)
  .add('Disabled', () => <UrlFormGroup disabled={true} id={'Disabled'} label={'Url'} onChange={action('Url')}
                                       value={''}/>)
  .add('Invalid', () => <UrlFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
                                      label={'Url'} onChange={action('Url')} value={''}/>)
  .add('Valid', () => <UrlFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Url'}
                                    onChange={action('Url')} value={''}/>)
  .add('Required', () => <UrlFormGroup id={'Required'} label={'Url'} onChange={action('Url')}
                                       required={true} value={''}/>)
  .add('Required -  no label', () => <UrlFormGroup id={'Required'} onChange={action('Url')}
                                                   required={true} value={''}/>)