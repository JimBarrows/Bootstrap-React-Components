import {storiesOf} from '@storybook/react'

import React       from 'react'
import Modal       from '../src/bootstrap/components/modal'
import ModalBody   from '../src/bootstrap/components/modal/Body'
import ModalFooter from '../src/bootstrap/components/modal/Footer'
import ModalHeader from '../src/bootstrap/components/modal/Header'

storiesOf('bootstrap/components/Modal', module)
	.addDecorator((story) => <div className="container" >       {story()}     </div >)
	.add('Basic', () => <Modal id={'basic'} show={true} >
		<ModalHeader id={'basic'} title={'Modal title'} />
		<ModalBody id={'basic'} >
			<p >Modal body text goes here.</p >
		</ModalBody >
		<ModalFooter id={'basic'} >
			<button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button >
			<button type="button" className="btn btn-primary" >Save changes</button >
		</ModalFooter >
	</Modal >)
	.add('Button Activated', () => <Modal id={'basic'} show={true} >
		<ModalHeader id={'basic'} title={'Modal title'} />
		<ModalBody id={'basic'} >
			<p >Modal body text goes here.</p >
		</ModalBody >
		<ModalFooter id={'basic'} >
			<button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button >
			<button type="button" className="btn btn-primary" >Save changes</button >
		</ModalFooter >
	</Modal >)
