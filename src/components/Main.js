import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout-polyfill';
import { Body } from 'native-base';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import LandingScreen from './LandingScreen';
import HomeScreen from './HomeScreen';
import { RightMenu } from './Navigation';

import { MapScreen } from './common';
import { 
	WhatToDo, 
	WhereToStay,
	WhereToEat, 
	ContactScreen,
	InWater,
	OnLand,
	Surfing,
	ExoticHideaways,
	BedBreakfast,
	HomesAndVilla,
	DealsSpecials,
	HotelsReview,


} from './pages';
import PlayaEscondida from './pages/WhereToStay/Hotels/PlayaEscondida';

export default class Main extends Component {
	drawer = () => {
		this.refs.DRAWER_REF.openDrawer();
	}
	render() {
        const navigationView = ( 
            <RightMenu />
        );
		return (
            <DrawerLayout
				drawerWidth={300} 
				drawerPosition={DrawerLayout.positions.Right} 
				renderNavigationView={() => navigationView}
				ref={'DRAWER_REF'}
            >
    	    <Router>
				<Scene 
					key="root"
					renderTitle={() => (
					<Body>

						</Body>
					)}
					leftTitle={() => (<Icon name='angle-left' size={28} color="#ffffff" />)}
					onLeft={() => Actions.pop()}
					rightTitle={() => (
						<Icon name='navicon' size={18} color="#ffffff" />
					)}
					RightStyle={styles.rightTitleStyle}
					barButtonTextStyle={styles.barButtonTextStyle}
					onRight={() => this.drawer()}
					navigationBarStyle={styles.header}
					tintColor='#ffffff'
					hideNavBar
				>
					<Scene key="Landing">
						<Scene 
							key="LandingScreen" 
							component={LandingScreen} 
							animation='fade' 
							hideNavBar 
							statusBarStyle="light-content" 
						/>
					</Scene>
					<Scene key="main">
						<Scene 
							key="HomeScreen" 
							component={HomeScreen} onLeft={() => this.drawer()} 
							leftTitle={() => (
								<Icon size={18} color="#ffffff" />
							)} 
						/>
						<Scene key="WhatToDo" component={WhatToDo} />

						<Scene key="WhereToStay" component={WhereToStay} />
						<Scene key="WhereToEat" component={WhereToEat} />
						<Scene key="ContactScreen" component={ContactScreen} />
						<Scene key="InWater" component={InWater} />
						<Scene key="OnLand" component={OnLand} />
						<Scene key="Surfing" component={Surfing} />
						<Scene key="ExoticHideaways" component={ExoticHideaways} />
						<Scene key="BedBreakfast" component={BedBreakfast} />
						<Scene key="HomesAndVilla" component={HomesAndVilla} />
						<Scene key="DealsSpecials" component={DealsSpecials} />
						<Scene key="HotelsReview" component={HotelsReview} />
						<Scene key="PlayaEscondida" component={PlayaEscondida} />
						<Scene key="MapScreen" component={MapScreen} />
					</Scene>
				</Scene>
			</Router>
			</DrawerLayout >
		);
	}
}

const styles = StyleSheet.create({ 
    mainCintainer: {
        backgroundColor: '#f7952e',
	},
	lightContent: {
		backgroundColor: '#863266',
		height: 20,
		flex: 1
	},
	barButtonTextStyle: {
		color: '#ffffff',
	},
    arrowStyle: {
        fontSize: 18,
        paddingTop: 7,
        color: '#efed83',
        fontWeight: 'bold'
    },
	header: {
		height: 75,
		justifyContent: 'center',
		backgroundColor: '#863266',
		paddingTop: 15,
	},
	rightTitleStyle: {
		position: 'absolute'
	},
	titleStyle: {
		alignSelf: 'center',
		height: 65,
		width: 62,
	},
	headerLogo: {
		height: 50,
		width: 62
	}
});
