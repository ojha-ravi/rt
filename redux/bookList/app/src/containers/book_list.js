import * as React from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends React.Component {
	returnList() {
		return this.props.books.map((v) => {
			return <li
				key={v.title}
				className="list-group-item"
				onClick={() => {
					this.props.selectBook(v)
				}}>{v.title}</li>;
		});
	}

	render() {
		return <ul className="list-group col-sm-4">
			{this.returnList()}
		</ul>;
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props.
	// Inside of BookList
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectbook is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({selectBook: selectBook}, dispatch);
}

// Promote Booklist from component to a container - it needs to know
// about this new dispatch method, selectbook. Make it available as props.
export const BookListConnect = connect(mapStateToProps, mapDispatchToProps)(BookList);
