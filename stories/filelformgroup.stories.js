import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import FileFormGroup from '../src/formgroups/FileFormGroup'


storiesOf('Form Groups/File', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <FileFormGroup id={'Default'} label='File' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <FileFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <FileFormGroup disabled={true} id={'Disabled'} label={'File'} onChange={action('File')} value={''}/>)
  .add('Invalid', () => <FileFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'File'} onChange={action('File')} value={''}/>)
  .add('Valid', () => <FileFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'File'} onChange={action('File')} value={''}/>)
  .add('Required', () => <FileFormGroup id={'Required'} label={'File'} onChange={action('File')} required={true} value={''}/>)
  .add('Required -  no label', () => <FileFormGroup id={'Required'} onChange={action('File')} required={true} value={''}/>)