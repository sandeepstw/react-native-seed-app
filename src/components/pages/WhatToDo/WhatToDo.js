import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	Container,
	Content,
	CardItem,
	Button
} from 'native-base';
import { Card, FooterScreen } from '../../common';


const SIZE = 40;

class WhatToDo extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>What To Do</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text>IN THE WATER</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<Image
								style={styles.imageStyle}
								source={require("../../../images/all_images/do-img-12.png")}
							/>
							<View style={styles.captionStyle}>
								<Text style={styles.captionTitleStyle} >
									SURFING
								</Text>
								<Text style={styles.paraStyle}>
									Remember, the ultra -hot Catherine Zeta Jones in Blue
									juice ? The movie that makes you crazy about surfing.
									So, for those in search of a "Perfect Wave" a lovely
									surfing spot is the destination to go for.
								</Text>
								<View>
									<Button
										style={styles.buttonStyle}
										rounded
										block
										onPress={() => Actions.Surfing()}
									>
										<Text style={styles.buttonTextStyle} >Read More</Text>
									</Button>
								</View>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("../../../images/all_images/do-img-5.jpg")}
                                />
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.innerHeader}>Whale watching</Text>
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
                                    source={require("../../../images/all_images/do-img-1.jpg")}
                                />
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.innerHeader}>Boat Tour</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									What makes a great sailboat race? Cruising
									World says Banderas Bay's "ideal weather and
									breathtaking landscape" make it the perfect place
									for a regatta. Add in a highly skilled, competitive
									group of international sailors and a fleet of the
									world's most popular one-design keelboats, and you
									have a winning formula. One of this spring's great
									sailboat races, being held for the first time in a
									warm climate with consistent breezes, is the J24 Worlds.
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("../../../images/all_images/do-img-1.jpg")}
                                />
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.innerHeader}>Sailing</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									What makes a great sailboat race? Cruising World
									says Banderas Bay's "ideal weather and breathtaking
									landscape" make it the perfect place for a regatta.
									Add in a highly skilled, competitive group of
									international sailors and a fleet of the world's
									most popular one-design keelboats, and you have a
									winning formula. One of this spring's great sailboat
									races, being held for the first time in a warm climate
									with consistent breezes, is the J24 Worlds.
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require("../../../images/all_images/do-img-2.jpg")}
                                />
						</CardItem>


						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.innerHeader}>Marietas Islands</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									The islands were formed during the Cretaceous era
									by volcanic activity that created ragged formations,
									ideal places to shelter life. Marieta Islands are one
									of the most important places for marine bird watching
									in México and the eastern Pacific tropics. Shelter for
									countless varieties of marine species. This wildlife
									refuge is a protected natural zone, and its
									characteristics make it a unique place worthy of
									visiting and respecting.Volcanic protected islands
								</Text>
							</View>
						</CardItem>
					</Card>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text>ON LAND</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image
								style={styles.imageStyle}
								source={require("../../../images/all_images/do-img-11.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.innerHeader}>Horseback Riding</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									There were barely a dozen other players on
									the field, but I was still riding scared at
									La Patrona, a palm-shrouded polo club in the
									tiny Mexican hamlet of San Pancho. As my fellow
									riders expertly maneuvered their horses among
									the goal posts and one another, I found myself
									resisting when my instructor, Raul, implored me
									to follow through with my swing.
								</Text>
							</View>
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
				backgroundColor: 'rgba(0, 0, 0, 0)',
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
	cardItemStyle: {
		padding: 5,
		borderRadius: 0,
        backgroundColor: '#f7952e',
        position: 'relative'
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
		color: '#ffffff',
		fontFamily: 'Lato-Regular'
	},
	innerHeader: {
		lineHeight: 25,
		fontSize: 25,
		alignSelf: 'center',
		color: '#333333',
		fontFamily: 'Amatic-Bold',
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

export { WhatToDo };
