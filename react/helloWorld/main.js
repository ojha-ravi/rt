import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from "./app";

ReactDOM.render(<App/>, document.querySelector('.container'));

// Trying to simulate Unmount
// setTimeout(() => {
//    ReactDOM.unmountComponentAtNode(document.querySelector('.container'));
// }, 10000);

