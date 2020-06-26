import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Navbar from './Navbar';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>FIND YOUR REP</h1>
				<List />
			</header>
		</div>
	);
}

export default App;
