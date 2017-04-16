import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { App } from './src/components/app';
import { rootReducer } from './src/reducers/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

// There is some issue here,
// according to lesson it should be able to work,
// There was no where told it is being told that we need store

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<App />
	</Provider>
	, document.querySelector('.container'));
