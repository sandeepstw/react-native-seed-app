import React, { Component } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import { 
	Container, 
	Content, 
} from 'native-base';
import HotelsList from './HotelsList';
import { FooterScreen } from '../../common';

class WhereToStay extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<HotelsList page_name={'WhereToStay'} />
					<View style={styles.spacerSrtyle} /> 
				</Content>
				<FooterScreen />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2e121c',
		paddingBottom: 65
	},
	spacerSrtyle: {
		height: 10,
		flex: 1
	}
});

export { WhereToStay };
