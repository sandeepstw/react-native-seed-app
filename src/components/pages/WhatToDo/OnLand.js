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
	CardItem
} from 'native-base';
import { Card, FooterScreen } from '../../common';


const SIZE = 40;

class OnLand extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Activities On Land</Text>
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
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/do-img-8.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.innerHeader}>Golf</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Nuevo Vallarta in Riviera Nayarit will welcome 
									the Ladies' Professional Golf Association (LPGA) 
									Futures Tour from April 8th – 10th. For the second 
									time, "The Riviera Nayarit Classic" will bring out 
									the best and the most promising female golfers to 
									El Tigre Golf & Country Club at the Paradise 
									Village Resort. This is the third stop of this 
									golf tour that kicks off on March 25th in 
									Winter Haven, Florida. 
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/do-img-13.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.innerHeader}>Yoga in sayulita</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									"Sayulita has become a hub for yoga on the Mexican 
									westcoast. The mission of Yoga Los Suenos is offer 
									a Full-time your -round regular yoga classes along 
									with a retreat centre. The expansion of Hotelito 
									Los Suenos was created with this in mind. The owner 
									of the hotel is a yogi and wanted to share the joy 
									of practising yoga in a tropical environment. 
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/do-img-7.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.innerHeader}>By Foot or ATV</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Whether you want a quick morning hike along 
									secluded tropical beach or a full day ATV adventure 
									the Rivera Nayarit offers a diverse array of options. 
									The Riviera Nayarit has some absolutely fantastic trails 
									- hikers surely won't be disappointed. You can hike 
									a trail leading into a rain forest or you can hike 
									into a gulch full of ancient pictographs as your reward.  
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/do-img-9.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.innerHeader}>Bird watching</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Vidal Prado is 100% Mexican Birding Tour Operator 
									that offers high quality bird watching tours for both 
									the avid and novice birders.A professional birder born 
									in San Blas, is a young, enthusiastic and experienced 
									specialist that can arrange and guide professional 
									birding tours to nearby locations around Sayulita, 
									including the world famous birding spot San Blas and 
									the San Pancho estuary.   
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/do-img-6.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.innerHeader}>Canopy Tours</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Canopy or Zip Lining adventures is a truly 
									thrilling ecological experience that offers 
									you the unique opportunity to glide through 
									the treetops on a network of cables suspended 
									high above the jungle trails of the local 
									Sierra Madre tropical forest.  
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/do-img-10.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.innerHeader}>Jungle Biking</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Vidal Prado is 100% Mexican Birding Tour 
									Operator that offers high quality bird watching 
									tours for both the avid and novice birders.A 
									professional birder born in San Blas, is a young, 
									enthusiastic and experienced specialist that 
									can arrange and guide professional birding tours 
									to nearby locations around Sayulita...  
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

export { OnLand };
