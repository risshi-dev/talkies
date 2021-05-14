import React from "react";
import Welcome from "./Welcome";
import "../App.css";
import Chat from "./Chat";
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {


	return (
		<Router>
			<div className="App">
				<Route path='/' exact component={Welcome} />
				<Route path='/chat' component={Chat} />
		</div>
		</Router>
		
	);
}

export default App;
