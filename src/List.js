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

	handleClick = (member) => {
		this.props.history.push({
			pathname: `/${member.id}/record`,
			state: {
				name: `${member.firstName} ${member.lastName}`,
			},
		});
	};

	render() {
		console.log(this.state.members);
		return (
			<div>
				<h1>FIND YOUR REP</h1>
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
								<Link
									to={{
										pathname: `/${member.id}/record`,
										state: {
											member: `${member.first_name} ${member.last_name}`,
										},
										test: 'test',
									}}
								>
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
