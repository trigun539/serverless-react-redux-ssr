import React, { Component } from 'react';
import styles               from './styles';

class App extends Component {

	render () {
		const {} = this.props;

		return (
			<div className={ styles.wrapper } >
				<h1 className={ styles.title }>Welcome to Lambda!</h1>
			</div>
		);
	}

}

App.propTypes = {};

export default App;
