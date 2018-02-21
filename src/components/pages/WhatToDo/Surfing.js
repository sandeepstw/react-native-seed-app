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
	List,
	ListItem,
	Left,
	Body,
	Button
} from 'native-base';
import { Card, FooterScreen } from '../../common';


const SIZE = 40;

class Surfing extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Surfing</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/girl-surfer.jpg")}
							/>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.listTitleStyle}>
									Get Set For Date With The Waves Courtesy Surfing
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Remember, the ultra-hot Catherine Zeta Jones in Blue juice ? 
									The movie that makes you crazy about surfing. So, for those 
									in search of a “Perfect Wave” a lovely surfing spot is the 
									destination to go for.
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.listTitleStyle}>
									Surfer’s heaven
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									It is renowned
									for its steady river mouth surf break.The picturesque
									village is a home to about 4000 residents, today.
									
									It’s a safe, amicable and quaint little town that has innumerable art
									galleries and high-end restaurants to cater to the taste of upscale 
									tourist as well.
									
									One such high-end restaurant is Don Pedro’s. From 1994, Don Pedro’s 
									has enticed customers from across the globe. The stunning town 
									is home to many foreigners for years due to its welcoming nature.
									
									The charming village is multi-faceted and loved by all right from its 
									native Cora and Huichol tribes to craftsmen as well as international tourists. 
									The alluring village, is the tiara in the newly styled “Riviera
									Nayarit”, the coastal corridor from Litibu to San Blas.
									

								</Text>
							</View>
						</CardItem>

						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									There are endless surf spots that cater for surfers 
									looking to catch their first waves all the way up to
									advanced surfers looking to score the wave of their life!
								
									Casa Buena Onda is located just 4 minutes walking distance 
									from the pristine waters.The beach is one of
									the most adored places in the world to surf. The beach is a paradise
									for all levels of surfers right from beginners to advanced.
								
									With long rides, it is the perfect spot for both long and short 
									boarders. If you are in love with great waves and surfing 
									then Casa Buena Onda is an ideal place for you. Meticulously 
									designed to suit to the taste of surfers,the amicable staff 
									offers assistance to other superb surf spots . Furthermore, 
									for all you surf fans , they also provide assistance with 
									surf lessons and surfboard rentals.
								
									You could simply enjoy a fun session and breaking on a 
									beautiful beach.
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.listTitleStyle}>
									But I'm just a beginner, what next? Definitely Surf Lessons
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>

									Learning to surf is one of the most pleasing thing to do.
									Nevertheless, it takes a lot of time to learn surfing and 
									the best way to do this is under the able guidance of a 
									professional instructor.
								
									Our expert team of instructors fluent in both English
									and Spanish are dedicated to teaching you surfing and making it 
									enjoyable as well.The surfing lesson are only given , when the 
									climate and the tides are favorable for beginners.
								
									Our goal is to offer quality lessons, hence we set up one surf 
									session per day.At  Surf Camp we assure you an enjoyable
									surfing experience for both a beginner or an expert.
								
									We offers an extensive range of beautiful accommodation right from 
									camping under the stars to five star luxury suites. Our goal is to 
									provide individual attention to all our students and a relaxed 
									surfing experience. 
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.listTitleStyle}>
									Surf Trips Away From The Crowd
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Getaway from the crowd and indulge in the pure pleasure of surfing. 
									Our delightful beach day trips to La Lancha, Burrows,
									and Punta de Mita, will not only offer you the chance to learn how to 
									surf but will also be a rewarding experience overall. Just like our Surf 
									lessons our trips dedicated to providing a high-quality experience to 
									all levels of surfers right from beginner, intermediate and advanced.
								
									For Beginners: Surf trips are arranged in the mornings and during 
									sunsets for new and intermediate surfers.
									
									For Advanced Surfers: Our Surf Trips are a great experience to advanced 
									surfers craving to find those endless point breaks. 
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.listTitleStyle}>
									Surf, Relax And Stay!
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									To balance some surf with a bit of culture, fine food 
									and relaxing ambiance, Casa Los Arcos a picturesque, homely 
									surf house is the perfect destination to stay in.
								
									Furthermore, the house also has a grand, state of the art 
									kitchen that opens it's bar style windows to a huge covered 
									dining terrace. The 2 out of 3 bedrooms come with an attached 
									bathroom and are air conditioned.
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text style={styles.listTitleStyle}>
									Rates and Packages
								</Text>
							</View>
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}>
								<Text style={styles.paraStyle}>
									Surfing we are focussed on providing quality
									training to our esteemed customers. That's why we arrange 
									only for one surf session per day. Besides, our expert instructors 
									patiently work towards helping you attain finesse in 
									surfing without any time limit.
								
									Considering all these aspects, money should not withhold you from 
									fulfilling your dream of learning to surf.
								</Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Body>

								</Body>
							</ListItem>
						</List>
					</Card>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.rowStyle}> 
								<Text>Our rate charts are as follows:</Text>
							</View>
						</CardItem>
                        <CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>1 Day Camp</Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Private: </Text>
								</Left>
								<Body>
									<Text note>$95 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group:</Text>
								</Left>
								<Body>
									<Text note>$65 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group of 4 or more</Text>
								</Left>
								<Body>
									<Text note>$55 per person</Text>
								</Body>
							</ListItem>
						</List>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Road Trip One Day Camp </Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Private: </Text>
								</Left>
								<Body>
									<Text note>$110 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group:</Text>
								</Left>
								<Body>
									<Text note>$85 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group of 4 or more</Text>
								</Left>
								<Body>
									<Text note>$70 per person</Text>
								</Body>
							</ListItem>
						</List>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Boat Trip One Day Camp</Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Private: </Text>
								</Left>
								<Body>
									<Text note>$150 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group:</Text>
								</Left>
								<Body>
									<Text note>$100 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group of 4 or more</Text>
								</Left>
								<Body>
									<Text note>$80 per person</Text>
								</Body>
							</ListItem>
						</List>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>3 Day Camp</Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Private: </Text>
								</Left>
								<Body>
									<Text note>$275 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group:</Text>
								</Left>
								<Body>
									<Text note>$225 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group of 4 or more</Text>
								</Left>
								<Body>
									<Text note>$200 per person</Text>
								</Body>
							</ListItem>
						</List>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>5 Day Camp</Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Private: </Text>
								</Left>
								<Body>
									<Text note>$395 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group:</Text>
								</Left>
								<Body>
									<Text note>$375 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group of 4 or more</Text>
								</Left>
								<Body>
									<Text note>$350 per person</Text>
								</Body>
							</ListItem>
						</List>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>7 Day Camp</Text>
							</View>
						</CardItem>
						<List style={styles.listContainerStyle}>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Private: </Text>
								</Left>
								<Body>
									<Text note>$550 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group:</Text>
								</Left>
								<Body>
									<Text note>$455 per person</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItemStyle}>
								<Left>
									<Text style={styles.listTitleStyle}>Group of 4 or more</Text>
								</Left>
								<Body>
									<Text note>$435 per person</Text>
								</Body>
							</ListItem>
						</List>
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

export { Surfing };
