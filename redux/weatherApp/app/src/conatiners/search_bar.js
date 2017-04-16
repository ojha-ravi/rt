import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index"

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ""
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onInputChange(e) {
		this.setState({
			term: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ""
		});
	}

	render() {
		return <form className="input-group" onSubmit={this.onSubmit}>
			<input
				type="text"
				className="form-control"
				placeholder="Get a five-day forecast for favourite city"
				aria-describedby="basic-addon1"
				value={this.state.term}
				onChange={this.onInputChange}></input>
			<span className="input-group-btn" id="basic-addon1">
				<button type="submit" className="btn btn-secondary">Submit</button>
			</span>
		</form>;
	}
}

function mapStateToProps() {

}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch);
}

export const SearchBarConnect = connect(null, mapDispatchToProps)(SearchBar);
