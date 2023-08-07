import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FirstApp } from './firstapp'
import './styles.css'
import {CounterApp} from './CounterApp'

// import { HelloWordApp } from './OfficePage'


/* import App from './OfficePage' */

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp />
    </React.StrictMode>
);


