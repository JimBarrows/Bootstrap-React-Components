import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import ColorFormGroup from '../src/formgroups/ColorFormGroup'


storiesOf('Form Groups/Color', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <ColorFormGroup id={'Default'} label='Color' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <ColorFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <ColorFormGroup disabled={true} id={'Disabled'} label={'Color'} onChange={action('Color')} value={'checkbox'}/>)
  .add('Invalid', () => <ColorFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Color'} onChange={action('Color')} value={'checkbox'}/>)
  .add('Valid', () => <ColorFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Color'} onChange={action('Color')} value={'checkbox'}/>)
  .add('Required', () => <ColorFormGroup id={'Required'} label={'Color'} onChange={action('Color')} required={true} value={'checkbox'}/>)
  .add('Required -  no label', () => <ColorFormGroup id={'Required'} onChange={action('Color')} required={true} value={'checkbox'}/>)