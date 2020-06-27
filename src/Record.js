import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import RecordTable from './RecordTable';

class VotingRecord extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			record: [],
			member: {},
		};
	}

	async componentDidMount() {
		const memberId = this.props.match.params.memberId;
		const list = await axios.get(
			`https://api.propublica.org/congress/v1/members/${memberId}/votes.json`,
			{
				headers: {
					'X-API-Key': '7DpUCPCbdtNNATnR4lV8lApfNqZpkZqCZieR6x3j',
				},
			}
		);

		this.setState({
			record: list.data.results[0].votes,
		});
	}

	goBack = () => {
		this.props.history.goBack();
	};

	render() {
		console.log(this.state.record);
		const { record } = this.state;
		return (
			<div>
				<h1>Voting Record for {this.props.history.location.state.member}</h1>
				<button onClick={this.goBack}>Go Back</button>
				<RecordTable record={record} />
			</div>
		);
	}
}

export default withRouter(VotingRecord);
