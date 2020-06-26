import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Record from './Record';
import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>FIND YOUR REP</h1>
				<Switch>
					<Route exact path='/' component={List} />
					<Route exact path='/:memberId/record' component={Record} />
				</Switch>
			</header>
		</div>
	);
}

export default App;
