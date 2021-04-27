import React from 'react';
import { Switch, Route } from 'react-router-dom';

import asyncComponent from '@Components/AsyncComponent';

export default function App() {
	return (
		<div className="app-container">
			<Switch>
				<Route exact path="/" component={ asyncComponent(() => import('@Scenes/Demo')) }/>
			</Switch>
		</div>
	);
}