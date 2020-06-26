import React from 'react';
import axios from 'axios';
import CongressCard from './Card';
import { Link } from 'react-router-dom';

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			members: [],
			state: '',
		};
	}

	async componentDidMount() {}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const chamber = 'senate';
		const list = await axios.get(
			`https://api.propublica.org/congress/v1/members/${chamber}/${this.state.state}/current.json`,
			{
				headers: {
					'X-API-Key': '7DpUCPCbdtNNATnR4lV8lApfNqZpkZqCZieR6x3j',
				},
			}
		);
		this.setState({
			members: list.data.results,
		});
	};

	render() {
		console.log(this.state.members);
		return (
			<div>
				<form onClick={this.handleSubmit}>
					<label>State </label>
					<input
						type='text'
						name='state'
						onChange={this.handleChange}
						value={this.state.state}
					/>
					<button type='submit'>Submit</button>
				</form>
				<div style={{ display: 'flex' }}>
					{this.state.members &&
						this.state.members.map((member) => (
							<div key={member.id}>
								<Link to={`/${member.id}/record`}>
									<CongressCard member={member} />
								</Link>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default List;
