import React, { Component } from 'react';
import {
	StatusBar
} from 'react-native';
import LogoHome from './LogoHome';
import Wallpaper from './Wallpaper';
import ButtonHome from './ButtonHome';

export default class LandingScreen extends Component {
	render() {
		return (
									
			<Wallpaper>
				<StatusBar
					backgroundColor="rgba(107, 47, 198, 0.0)"
					translucent
					barStyle="light-content"
				/>
				<LogoHome />
				<ButtonHome />
			</Wallpaper>
		);
	}
}
