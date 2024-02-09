import {action}    from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React             from 'react'
import Button            from '../src/bootstrap/components/Button'
import AddButton         from '../src/buttons/AddButton'
import CancelButton      from '../src/buttons/CancelButton'
import EditButton        from '../src/buttons/EditButton'
import ReloadButton      from '../src/buttons/ReloadButton'
import RemoveButton      from '../src/buttons/RemoveButton'
import RowControlButtons from '../src/buttons/RowControlButtons'
import SaveButton        from '../src/buttons/SaveButton'


storiesOf('bootstrap/components/Button', module)
	.addDecorator((story) =>
		<div className="container" >
			{story()}
		</div >)
	.add('Default', () => <Button id={'default'} >Press me</Button >)
	.add('Danger', () => <Button id={'danger'} onClick={action('Danger Button Pressed')} context={'danger'} >Press
		me</Button >)
	.add('light', () => <Button id={'light'} onClick={action('Light Button Pressed')} context={'light'} >Press
		me</Button >)
	.add('Dark', () => <Button id={'dark'} onClick={action('Dark Button Pressed')} context={'dark'} >Press me</Button >)
	.add('Info', () => <Button id={'info'} onClick={action('Info Button Pressed')} context={'info'} >Press me</Button >)
	.add('Link', () => <Button id={'link'} onClick={action('Link Button Pressed')} context={'link'} >Press me</Button >)
	.add('Primary', () => <Button id={'primary'} onClick={action('Primary Button Pressed')} context={'primary'} >Press
		me</Button >)
	.add('Secondary', () => <Button id={'secondary'} onClick={action('Secondary Button Pressed')} context={'secondary'} >Press
		me</Button >)
	.add('Success', () => <Button id={'success'} onClick={action('Success Button Pressed')} context={'success'} >Press
		me</Button >)
	.add('Warning', () => <Button id={'warning'} onClick={action('Warning Button Pressed')} context={'warning'} >Press
		me</Button >)
	.add('Outline Danger', () => <Button id={'danger'} onClick={action('Danger Button Pressed')} outline={true}
		context={'danger'} >Press me</Button >)
	.add('Outline Dark', () => <Button id={'dark'} onClick={action('Dark Button Pressed')} outline={true}
		context={'dark'} >Press
		me</Button >)
	.add('Outline Info', () => <Button id={'info'} onClick={action('Info Button Pressed')} outline={true}
		context={'info'} >Press
		me</Button >)
	.add('Outline Primary', () => <Button id={'primary'} onClick={action('Primary Button Pressed')} outline={true}
		context={'primary'} >Press me</Button >)
	.add('Outline Secondary', () => <Button id={'secondary'} onClick={action('Secondary Button Pressed')} outline={true}
		context={'secondary'} >Press me</Button >)
	.add('Outline Success', () => <Button id={'success'} onClick={action('Success Button Pressed')} outline={true}
		context={'success'} >Press me</Button >)
	.add('Outline Warning', () => <Button id={'warning'} onClick={action('Warning Button Pressed')} outline={true}
		context={'warning'} >Press me</Button >)
	.add('Large', () => <Button id={'large'} onClick={action('Large Button Pressed')} size={'large'} context={'info'} >Press
		me</Button >)
	.add('Small', () => <Button id={'small'} onClick={action('Small Button Pressed')} size={'small'} context={'info'} >Press
		me</Button >)
	.add('Block', () => <Button block={true} id={'block'} onClick={action('Block Button Pressed')} context={'info'} >Press
		me</Button >)
	.add('Disabled', () => <Button disabled={true} id={'block'} onClick={action('Block Button Pressed')}
		context={'info'} >Press
		me</Button >)


storiesOf('buttons', module)
	.addDecorator((story) =>
		<div className="container" >
			{story()}
		</div >)
	.add('Add Button', () => <AddButton id={'add'} onClick={action('Add Button pressed')} />)
	.add('Cancel Button', () => <CancelButton id={'cancel'} onClick={action('Cancel Button pressed')} />)
	.add('Edit Button', () => <EditButton id={'edit'} onClick={action('Edit Button pressed')} />)
	.add('Reload Button', () => <ReloadButton id={'reload'} onClick={action('Reload Button pressed')} />)
	.add('Remove Button', () => <RemoveButton id={'remove'} onClick={action('Remove Button pressed')} />)
	.add('Row Control Buttons Not Editing', () => <RowControlButtons id={'row-controls'}
		cancel={action('Cancel Button pressed')}
		edit={action('Edit button pressed')}
		save={action('Save button pressed')}
		remove={action('Remove button pressed')} />)
	.add('Row Control Buttons Editing', () => <RowControlButtons id={'row-controls'}
		cancel={action('Cancel Button pressed')}
		edit={action('Edit button pressed')}
		editing={true}
		save={action('Save button pressed')}
		remove={action('Remove button pressed')} />)
	.add('Save Button', () => <SaveButton id={'remove'} onClick={action('Save Button pressed')} />)
