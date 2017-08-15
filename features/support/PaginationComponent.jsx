import React from "react";
import { Pagination } from "../../src";

class PaginationComponent extends React.Component {

  onNext() {

  }

  onPrevious() {

  }

	render( ) {
		return (
			<Pagination id="paginationTest" onNext={this.onNext.bind(this)} onPrevious={this.onPrevious.bind(this)}>
				<li>
					<a href="#">1</a>
				</li>
				<li>
					<a href="#">2</a>
				</li>
				<li>
					<a href="#">3</a>
				</li>
				<li>
					<a href="#">4</a>
				</li>
				<li>
					<a href="#">5</a>
				</li>
			</Pagination>
		)
	}
}

export default PaginationComponent;
