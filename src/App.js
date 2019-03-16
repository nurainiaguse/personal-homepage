import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Container} from 'semantic-ui-react';
import './App.scss';
import './semantic/dist/semantic.min.css';

import Menu from './Menu'
import Homepage from './Homepage'
import Quotes from './Quotes'

class App extends Component{
	render(){
		return (
			<Router>
			<Switch>
				<Route exact path="/" component={Homepage}/>
				<Route exact path="/quotes" component={Quotes}/>
			</Switch>
			</Router>
		)
	}
}

export default App;
