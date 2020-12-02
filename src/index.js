import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import App from './components/app';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const jsx = (
<App />
)
ReactDOM.render(jsx, container);

reportWebVitals();
