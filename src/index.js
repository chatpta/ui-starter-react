import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';


import App from './App/App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import DefaultThemeProvider from "./theme/DefaultThemeProvider";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <DefaultThemeProvider>
                <CssBaseline/>
                <App/>
            </DefaultThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
