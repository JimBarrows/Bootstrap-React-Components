import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import EditableTextCell from '../src/table/EditableTextCell'


storiesOf('Tables/Editable Cell', module)
  .addDecorator((story) => <div className="container">
    <table>
      <thead>
      <tr>
        <th>Display</th>
        <th>Edit</th>
      </tr>
      </thead>
      <tbody>{story()}</tbody>
    </table>
  </div>)
  .add('Text', () =>
    <tr>
      <EditableTextCell id={'Text-display'} onChange={action('Text - display clicked')} value={'Text - display'}/>
      <EditableTextCell id={'Text-edit'} edit={true} onChange={action('Text - edit clicked')} value={'Text - edit'}/>
    </tr>)
