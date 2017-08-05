import React from "react";

class Editor extends React.Component {

	componentWillReceiveProps(nextProps) {
		let { item } = nextProps;
		this.setState({
			current: item
		})
	}

	constructor(props) {
		super(props);
		this.state = {
			current: props.item
		}
	}

	onCancel( e) {
		e.preventDefault();
		this.setState({
			current: this.props.item
		})
		if( this.props.onCancel) {
			this.props.onCancel( e);
		}
	}

	onChange(e) {
		this.setState({
			current: this.props.onChange(e, this.state.current)
		});
	}

	onSubmit( e ) {
		e.preventDefault( );
		this.props.onSubmit( this.state.current );
	}

	render( ) {
		let { id, formElements } = this.props;

		let childrenWithProps = React.Children.map(formElements(this.state.current),
     (child) => React.cloneElement(child, {
       onChange: this.onChange.bind(this)
     })
    );

		return (
			<form id="defaultForm" onSubmit={this.onSubmit.bind( this )}>
				{childrenWithProps}
				<button id={"submit_form_" + id} type="submit" class="btn btn-success">Save</button>
				<button id={"cancel_form_" + id} onClick={this.onCancel.bind(this)} class="btn btn-default" type="button">Cancel</button>
			</form>
		);
	}

}

export default Editor;
