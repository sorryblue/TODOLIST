import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
if(module.hot)module.hot.accept();
ReactDom.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
)