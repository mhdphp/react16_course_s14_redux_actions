import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// Provider is a helper component that will wrap up the App component
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducer';

const myStore = createStore(reducer);

ReactDOM.render(<Provider store={myStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
