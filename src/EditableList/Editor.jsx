import React from "react";

class Editor extends React.Component {

	cancel( ) {
		this.props.cancel( );
	}

	onSubmit( e ) {
		e.preventDefault( );
		this.props.onSubmit( e );
	}

	render( ) {
		let { id } = this.props;
		return (
			<form id="defaultForm" onSubmit={this.onSubmit.bind( this )}>
				{this.props.children}
				<button id={"submit_form_" + id} type="submit" class="btn btn-success">Save</button>
				<button id={"cancel_form_" + id} onClick={this.cancel} class="btn btn-success">Cancel</button>
			</form>
		);
	}

}

export default Editor;
