import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './sass/main.scss';
import App from './js/App';


const render = (Component) => { 
ReactDOM.render(
    <AppContainer> 
        <Component />
    </AppContainer>, document.getElementById('root')
)};

render(App);

if (module.hot) module.hot.accept('./js/App', () => render(App));
