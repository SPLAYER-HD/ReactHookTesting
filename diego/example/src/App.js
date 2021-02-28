import React from 'react'

import 'diego/dist/index.css'

import logo from './logo.svg'
import './App.css'
import { useGrowl, Growl } from './growl'

function App() {
	const [active, setActive] = useGrowl()
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />				

				<a className="App-link" href="#" onClick={() => void setActive(true)}>
					Clik here to activate the growl
        		</a>
			</header>
			<Growl onDismissed={() => setActive(false)} active={active} message="Hello World!" />
		</div>
	)
}

export default App;