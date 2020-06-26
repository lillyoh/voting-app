import React from 'react';
import axios from 'axios';

class VotingRecord extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			record: [],
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
		console.log(list);
		this.setState({
			record: list.data.results[0].votes,
		});
	}

	render() {
		console.log(this.state.record);
		const { record } = this.state;
		return (
			<div>
				{record.map((r) => (
					<div key={r.vote_uri}>
						<p>{r.description}</p>
						<p>{r.bill.latest_action}</p>
						<p>{r.date}</p>
						<p>Vote: {r.position}</p>
					</div>
				))}
			</div>
		);
	}
}

export default VotingRecord;
