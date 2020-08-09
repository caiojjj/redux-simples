import React from 'react';
import './App.css';
import Interval from './components/Interval';
import Average from './components/Average/Index';
import Sum from './components/Sum/Index';
import AleatoryNumber from './components/AleatoryNumber';

function App() {
	return (
		<div className="App">

			<h1>React-Redux(Simples)</h1>
			
			<div className='line'>
				<Interval />
			</div>

			<div className='line'>

				<Average />
				<Sum  />
 				<AleatoryNumber />

			</div>
		</div>
	);
}

export default App;
