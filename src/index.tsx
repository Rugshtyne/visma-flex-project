import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './store/index';

const store = createStore(
  rootReducer,
  devToolsEnhancer({ name: 'FlexinFlex' }),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
