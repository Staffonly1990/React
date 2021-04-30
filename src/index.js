import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { dispatch } from './db/db'



let render_Dom = () => {

	ReactDOM.render(
		<React.StrictMode>
			<App dispatch={dispatch.bind(dispatch)} />
		</React.StrictMode>,
		document.getElementById('root')
	);
	reportWebVitals();
}

render_Dom()
dispatch('Render',render_Dom)