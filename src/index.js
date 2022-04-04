import React from 'react';

import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

import { createRoot } from 'react-dom/client';
import { StateProvider } from './Context/StateProvider';
import { initalState } from "./Context/initalState";
import reducer from './Context/Reducer';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <StateProvider initalState = { initalState } reducer={ reducer }>
            <App />
        </StateProvider>
    </Router>
);

