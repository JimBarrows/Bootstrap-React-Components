import React from "react";
import data from "./EditableListTest/Data";
import { List } from "../../src/EditableList";
import { TextFormGroup, NumberFormGroup } from "../../src/";

class EditableListComponent extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			list: data,
			current: null
		}
	}

	addListItem( ) {
		let id = this.state.list.length + 1;
		this.setState({
			selected: {},
			list: [
				...this.state.list, {
					id,
					name: this.state.selected.name,
					age: this.state.selected.age
				}
			]
		});
	}

	body( item ) {
		return <p>{item.age}</p>
	}

	formElements( item ) {
		let nameError = "";
		let ageError = "";
		return <div class="formElements">
			<TextFormGroup error={nameError} id="name" label="Name" value={item.name}/>
			<NumberFormGroup error={ageError} id="age" label="Age" value={item.age}/>
		</div>
	}

	header( item ) {
		return item.name;
	}

	isCurrent( item ) {
		return this.state.current && this.state.current.id && (this.state.current.id === item.id);
	}

	isNew( item ) {
		return !this.state.current.id;
	}

	onChange(event,item) {
		let changedItem = Object.assign( {}, item)
		if(event.target.id === 'name') {
			changedItem.name = event.target.value
		} else if ( event.target.id === 'age') {
			changedItem.age = event.target.value
		}
		return changedItem;
	}

	onSelected( item ) {
		this.setState({ current: item })
	}

	newItem( ) {
		return { id:'new_item', name: '', age: 0 };
	}

	onSubmit( item) {
		let originalList = this.state.list;
		if( item.id) {
			let original = this.state.list.findIndex( l => l.id === item.id );
			originalList[original] =  item ;
		} else {
			item.id = originalList.length +1;
		}
		this.setState({
			selected: null,
			list: [...originalList, item]
		})
	}

	removeListItem( item ) {
		this.setState({
			list: this.state.list.filter( i => i.id === item.id )
		})
	}

	render( ) {
		return <List body={this.body}
									current={this.state.current}
									editFormElements={this.formElements.bind( this )}
									formElements={this.formElements.bind( this )}
									header={this.header}
									id="data_item_list"
									isCurrent={this.isCurrent.bind( this )}
									isNew={this.isNew.bind( this )}
									list={this.state.list}
									newItem={this.newItem.bind( this )}
									onChange={this.onChange.bind(this)}
									onSelected={this.onSelected.bind(this)}
									onSubmit={this.onSubmit.bind( this )}/>
	}

	updateListItem( item ) {
		// if ( item.id ) {
		// 	let original = this.state.list.findIndex( l => l.id === item.id );
		// 	let originalList = this.state.list;
		// 	originalList[original] = Object.assign( {}, originalList[original], item );
		// 	this.setState({ list: originalList })
		// } else {
			this.setState({current: Object.assign( {}, this.state.current, item )})
		// }
	}
}

export default EditableListComponent;
