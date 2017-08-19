'use strict';
import React from "react";

export default class Pagination extends React.Component {
	
	onNext(e) {
		e.preventDefault();
		this.props.onNext();
	}

	onPrevious(e) {
		e.preventDefault();
		this.props.onPrevious();
	}

	render() {
		let {id, onPrevious, onNext} = this.props;
		return (

				<nav id={id + "pagination"} aria-label={id + " Page navigation"}>
  				<ul class="pagination">
    				<li>
      				<a onClick={this.onPrevious.bind(this)} aria-label="Previous">
        				<span aria-hidden="true">&laquo;</span>
      				</a>
    				</li>
						{this.props.children}
    				<li>
      				<a onClick={this.onNext.bind(this)} aria-label="Next">
        				<span aria-hidden="true">&raquo;</span>
      				</a>
    				</li>
  				</ul>
				</nav>
		);
	}
}
