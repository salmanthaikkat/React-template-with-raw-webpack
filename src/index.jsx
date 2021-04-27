import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

import store, { history } from '@Root/store';
import App from '@Components/App';

import '@Styles/styles.scss';

const mountRoot = document.getElementById('app');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
		<Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  mountRoot,
);
