import React, { Component } from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity
} from 'react-native';
import { Container } from 'native-base';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, FooterScreen } from './common';


const SIZE = 40;

export default class HomeScreen extends Component {
	render() {
		const datacarousel = [
			{
				id: 339964,
				title:'Welcome to React Demo',
				imagePath: 'http://www.sayulita.com/images/about-banner.jpg',

			},
			{
				id: 315635,
				imagePath: 'http://www.sayulita.com/images/about-banner.jpg',
			},
			{
				id: 339403,
				imagePath: 'http://www.sayulita.com/images/about-banner.jpg',
			},
		];

		const featuredcarousel = [
			{
				id: 1,
				title: 'Playa Escondida',
				imagePath: 'http://www.sayulita.com/images/where-to-stay/playa-escondida.png',
			},
			{
				id: 2,
				title: 'Casa Chachalaca',
				imagePath: 'http://www.sayulita.com/images/where-to-stay/chachalaca.png',
			},
			{
				id: 3,
				title: 'Hotel Kupuri',
				imagePath: 'http://www.sayulita.com/images/where-to-stay/kupuri.png',
			},

			{
				id: 4,
				title: 'Mar y Suenos Suites',
				imagePath: 'http://www.sayulita.com/images/where-to-stay/mar-y-suenos.png',
			},
		];
		return (
			<Container>
				<ScrollView style={styles.container}>
					<Card>
						<SwipeableParallaxCarousel
							data={datacarousel}
							titleColor="#ffffff"
							align='center'
							parallax
							navigation
							font='Amatic-Bold'
							size={28}
							autoplay
							navigationColor="#F035E0"
							navigationType='bar'
						/>
					</Card>
					<Card>
						<CardSection>
							<TouchableOpacity style={styles.imageStyle} onPress={() => Actions.WhatToDo()}>
								<Image style={styles.imageStyle} source={require("../images/all_images/img-1.jpg")}  />
								<Text
									onPress={() => Actions.AboutScreen()}
									style={styles.itemTitleStyle}
								>
									WHAT TO DO
								</Text>
							</TouchableOpacity>
						</CardSection>
					</Card>
					<Card>
						<CardSection>
							<TouchableOpacity style={styles.imageStyle} onPress={() => Actions.WhereToStay()}>
								<Image style={styles.imageStyle} source={require("../images/all_images/img-2.jpg")} />
								<Text style={styles.itemTitleStyle}>WHERE TO STAY</Text>
							</TouchableOpacity>
						</CardSection>
					</Card>
					<Card>
						<CardSection>
							<TouchableOpacity style={styles.imageStyle} onPress={() => Actions.WhereToEat()}>
								<Image style={styles.imageStyle} source={require("../images/all_images/img-3.jpg")} />
								<Text style={styles.itemTitleStyle}>WHERE TO EAT</Text>
							</TouchableOpacity>
						</CardSection>
					</Card>
					<Card>
						<CardSection>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Featured Hotels</Text>
							</View>
						</CardSection>
						<View style={styles.featuredSliderStyle}>
							<SwipeableParallaxCarousel
								data={featuredcarousel}
								titleColor="#ffffff"
								height={400}
								size={18}
								parallax
								font='Lato-Regular'
								navigation
								navigationColor="#F035E0"
								navigationType='bar'
							/>
						</View>
					</Card>
					<View style={styles.spacerSrtyle} />
				</ScrollView>
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
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	},
	imageStyle: {
        height: 300,
        flex: 1,
        width: null
	},
	itemTitleStyle: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 25,
		zIndex: 1,
		fontSize: 18,
		lineHeight: 25,
		backgroundColor: 'rgba(0, 0, 0, 0)',
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
	},
	featuredTitleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 2
	},
	featuredTitleStyle: {
		fontSize: 28,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#333333',
		alignSelf: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Amatic-Bold'
	},
	featuredSliderStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
	spacerSrtyle: {
		height: 10,
		flex: 1
	}
});
