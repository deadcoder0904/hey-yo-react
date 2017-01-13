import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Hello extends Component {
	render() {
		return (
				<h1>Hey Yo React</h1>
			)
	}
}

ReactDOM.render(<Hello />, document.getElementById('app'));
