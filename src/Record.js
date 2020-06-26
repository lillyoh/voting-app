import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
		console.log(this.props.history);
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

	render() {
		const { record } = this.state;
		return (
			<div>
				<h1>Voting Record for {this.props.history.location.state.member}</h1>
				{record.map((r) => (
					<div key={r.vote_uri}>
						<p>{r.description}</p>
						<p>Date: {r.date}</p>
						<p>Vote: {r.position}</p>
					</div>
				))}
			</div>
		);
	}
}

export default withRouter(VotingRecord);
