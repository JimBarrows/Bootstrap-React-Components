import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import PanelStripedTable from '../src/panels/PanelStripedTable'

storiesOf('Panels/table', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', (() =>
    <PanelStripedTable onAddClick={action('list table panel clicked')} id={'list-table-panel'} title={'Basic'}>
      <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>column 1 row 1</td>
        <td>column 2 row 1</td>
      </tr>
      <tr>
        <td>column 1 row 2</td>
        <td>column 2 row 2</td>
      </tr>
      </tbody>
    </PanelStripedTable>))