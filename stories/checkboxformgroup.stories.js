import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import CheckboxFormGroup from '../src/formgroups/CheckboxFormGroup'
import EditableTextCell from '../src/table/EditableTextCell'


storiesOf('Form Groups/checkbox', module)
  .addDecorator((story) => <div className="container">{story()}</div>)
  .add('Checked', () =>
    <CheckboxFormGroup checked={true} id={'checked'} label={'Checkbox'} onChange={action('Checkbox')} value={'checkbox'}/>)
  .add('Unchecked', () =>
    <CheckboxFormGroup checked={false} id={'unchecked'} label={'Checkbox'} onChange={action('Checkbox')} value={'checkbox'}/>)
  .add('Disabled', () =>
    <CheckboxFormGroup checked={true} disabled={true} id={'checked'} label={'Checkbox'} onChange={action('Checkbox')} value={'checkbox'}/>)
  .add('Invalid', () =>
    <CheckboxFormGroup valid={false} validationMessage={'This isn\'t right'} disabled={true} id={'checked'} label={'Checkbox'} onChange={action('Checkbox')} value={'checkbox'}/>)
  .add('Valid', () =>
    <CheckboxFormGroup valid={true} validationMessage={'This is right'} disabled={true} id={'checked'} label={'Checkbox'} onChange={action('Checkbox')} value={'checkbox'}/>)
  .add('Required', () =>
    <CheckboxFormGroup checked={true} id={'checked'} label={'Checkbox'} onChange={action('Checkbox')} required={true} value={'checkbox'}/>)
