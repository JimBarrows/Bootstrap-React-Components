import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import PanelBody from '../src/panels/PanelBody'
import PanelWithAddButton from '../src/panels/PanelWithAddButton'

storiesOf('Panels/Add Button', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () =>
    <PanelWithAddButton onAddClick={action('panel with add button clicked')} id={'basic'}
                        title={'Panel with add Button'}>
      <PanelBody id={'heading'}>
        Panel with add button
      </PanelBody>
    </PanelWithAddButton>)