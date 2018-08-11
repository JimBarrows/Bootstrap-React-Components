import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import TextAreaFormGroup from '../src/formgroups/TextAreaFormGroup'
import TextFormGroup from '../src/formgroups/TextFormGroup'
import Panel from '../src/panels/Panel'
import PanelBody from '../src/panels/PanelBody'
import PanelHeader from '../src/panels/PanelHeader'


storiesOf('Form Groups/Text Area', module)
	.addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
	.add('Default', () => <TextAreaFormGroup id={'Default'} label='TextArea' onChange={action('default clicked')}
	                                         value={''}/>)
	.add('No label', () => <TextAreaFormGroup id={'No label'} onChange={action('default clicked')}
	                                          value={''}/>)
	.add('Disabled', () => <TextAreaFormGroup disabled={true} id={'Disabled'} label={'TextArea'}
	                                          onChange={action('TextArea')}
	                                          value={''}/>)
	.add('Invalid', () => <TextAreaFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
	                                         label={'TextArea'} onChange={action('TextArea')} value={''}/>)
	.add('Valid', () => <TextAreaFormGroup validationMessage={'This is right'} valid={true} id={'Valid'}
	                                       label={'TextArea'}
	                                       onChange={action('TextArea')} value={''}/>)
	.add('Required', () => <TextAreaFormGroup id={'Required'} label={'TextArea'} onChange={action('TextArea')}
	                                          required={true} value={''}/>)
	.add('Required -  no label', () => <TextAreaFormGroup id={'Required'} onChange={action('TextArea')}
	                                                      required={true} value={''}/>)
	.add('With Other componets', () => <Panel id={'withOtherComponents'}>
		<PanelHeader id={'withOtherComponents'}>Header</PanelHeader>
		<PanelBody id={'withOtherComponets'}>
			<TextFormGroup id={'withOtherComponents'} label={'Name'} onChange={action('withOtherComponts Text')}
			               required={true}
			               value={''}/>
			<TextAreaFormGroup id={'withOtherComponents'} label={'Description'}
			                   onChange={action('withOtherComponents Text ARea')}
			                   value={' '}/>
		</PanelBody>
	</Panel>)
	.add('With Two', () => <div>
		<TextAreaFormGroup id={'withTwo1'} label='Text Area 1' onChange={action('default clicked 1')} value={''}/>
		<TextAreaFormGroup id={'withTwo2'} label='Text Area 2' onChange={action('default clicked 2')} value={''}/>
	</div>)