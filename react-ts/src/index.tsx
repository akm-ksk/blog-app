import React from 'react';
import './index.css';
import './styles/common.css'
import reportWebVitals from './reportWebVitals';
import {RouterConfig} from "./RouterConfig";
import {createRoot} from "react-dom/client";

const container = document.getElementById('root')

if (container) {
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <RouterConfig/>
        </React.StrictMode>
    )
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
