import React from "react";

class Editor extends React.Component {

	cancel( ) {
		this.props.cancel( );
	}

	componentWillMount( ) {
		this.propsToState( this.props );
	}

	componentWillReceiveProps( nextProps ) {
		this.propsToState( nextProps );
	}

	isValid( ) {
		return false;
	}

	propsToState( props ) {
		this.setState({
			...props
		});
	}

	onSubmit( e ) {
		e.preventDefault( );
		if (this.isValid( )) {
			this.props.onSubmit(this.stateToItem( ));
		}
	}

	render( ) {
		return (
			<form id="defaultForm" onSubmit={this.onSubmit.bind( this )}>
				<p>Override this method</p>
			</form>
		);
	}

	stateToItem( ) {
		return this.state;
	}

}

export default Editor;
