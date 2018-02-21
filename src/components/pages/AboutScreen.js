import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import { 
	Container, 
	Content, 
	CardItem, 
	List, 
	ListItem, 
	Body,
	Button
} from 'native-base';
import { Card, FooterScreen } from '../common';
import { Actions } from 'react-native-router-flux';

const SIZE = 40;

class AboutScreen extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text>A LITTLE ABOUT US</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>the perfect place to be</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
								A Perfect Beach Place is situated in Mexico, 
								village set with stunning sunset views & palm trees. Beautiful 
								beach life If you are looking for great food, a great beach then 
								this is the place to stay & enjoy vacations. It is quiet and less 
								crowded and hopefully will stay that way.
								</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
                                <Image 
                                    style={styles.imageStyle} 
                                    source={require("../../images/all_images/ab-img-1.jpg")}
                                />
						</CardItem>
					</Card>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text>WHERE TO STAY</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>the perfect place to be</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									We’ve pre-picked the best hotels, hostels and bed 
									and breakfasts to make your stay as enjoyable as possible.
								</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
                                <Image 
                                    style={styles.imageStyle} 
                                    source={require("../../images/all_images/ab-img-3.jpg")}
                                />
						</CardItem>
						<View style={styles.cardItemStyle}>
							<Button style={styles.buttonStyle} rounded block>
								<Text 
								onPress={() => Actions.WhereToStay()}
								style={styles.buttonTextStyle} >BOOK NOW</Text>
							</Button>
						</View>
					</Card>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text>WHERE TO EAT</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>FOOD AND DRINKS, RESTAURANTS</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Find the most awesome Food & Drinks restaurants  
									beach right now! Compare, select & ENJOY the best SeaFood, 
									Mexican food, Italian Food, French food, Argentine food, 
									burgers, Drinks & more near you with 100% Guarantee.
								</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
                                <Image 
                                    style={styles.imageStyle} 
                                    source={require("../../images/all_images/ab-img-4.jpg")}
                                />
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Body>
									<Text style={styles.listTitleStyle}>Naty’s Cocina</Text>
									<Text note>Tacos</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Body>
									<Text style={styles.listTitleStyle}>Rollie’s Breakfast</Text>
									<Text note>Breakfast</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Body>
									<Text style={styles.listTitleStyle}>Chilly Willy</Text>
									<Text note>Seafood</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Body>
									<Text style={styles.listTitleStyle}>Playa Escondida</Text>
									<Text note>Mexican</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Body>
									<Text style={styles.listTitleStyle}>Naty’s Cocina</Text>
									<Text note>Tacos</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Body>
									<Text style={styles.listTitleStyle}>Rollie’s Breakfast</Text>
									<Text note>Breakfast</Text>
								</Body>
							</ListItem>
						</List>
						<View style={styles.cardItemStyle}>
							<Button style={styles.buttonStyle} rounded block>
								<Text 
								onPress={() => Actions.WhereToEat()}
								style={styles.buttonTextStyle} >CHECK LIST</Text>
							</Button>
						</View>
					</Card>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text>THE LOCATION</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>ARE YOU READY?</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									From the US or Canada is as easy 
									as hopping on a plane in a frozen northern city, 
									knocking back a few cocktails or beers, a book, or 
									a nap, and getting off the plane in Puerto Vallarta 2 
									or 3 or 5 hours later, in the tropics, in the sun, in 
									what feels like a different world.
								</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
                                <Image 
                                    style={styles.imageStyle} 
                                    source={require("../../images/all_images/ab-map.jpg")}
                                />
						</CardItem>
						
					</Card>
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
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	cardItemStyle: {
		padding: 5,
		borderRadius: 0,
        backgroundColor: '#f7952e',
        position: 'relative'
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
    captionStyle: {
        position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		padding: 25,
        zIndex: 1,
    },
    captionTitleStyle: {
        fontSize: 18,
		lineHeight: 25,
		textShadowColor: 'rgba(0, 0, 0, 0.3)',
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
	},
	rowStyle: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	paraStyle: {
		lineHeight: 25,
		fontSize: 15,
		alignSelf: 'center',
		color: '#ffffff'
	},
	listContainerStyle: {
		backgroundColor: '#f7952e',
		paddingRight: 20
	},
	listItemStyle: {
		backgroundColor: '#f7952e',

	},
	listTitleStyle: {
		color: '#7f3f98',

	},
	buttonStyle: {
		backgroundColor: '#863266',
		margin: 10
	},
	buttonTextStyle: {
		color: '#ffffff'
	},
	spacerSrtyle: {
		height: 10,
		flex: 1
	}
});

export { AboutScreen };
