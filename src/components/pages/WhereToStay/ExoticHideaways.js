import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
	TouchableOpacity,
	Linking,
	WebView
} from 'react-native';
import { Container, Content, CardItem, List,ListItem,Left,Body,Button } from 'native-base';
import { Card, FooterScreen } from '../../common';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { exotic_action } from '../../../actions';
import { Actions } from 'react-native-router-flux';
const SIZE = 40;
class ExoticHideaways extends Component {
	render() {
		 const data= this.props.payload;
		 
		 
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						
						
                        <CardItem style={styles.cardItemStyle}>
							<Image 
								style={styles.imageStyle} 
								source={require("../../../images/all_images/exotichideaways-banner.jpg")}
							/>
							
							 
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
							<View style={{alignItems:'center',flex:2}}>
								<Image 
									style={styles.topimageStyle} 
									source={require("../../../images/all_images/playa-es-logo.png")}
								/>
							</View>
							 
						</CardItem>
                      	<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>{data.topTitle}</Text>
							</View>
						</CardItem>
						 <CardItem style={styles.cardItemStyle}>
							
							<View style={styles.rowStyle}>
								
								<Text style={styles.paraStyle}>
									{data.desc}
								</Text>
								
							</View>
							 
						</CardItem>
						 <CardItem style={styles.cardItemStyle}>
								<Image 
									style={styles.imageStyle} 
									source={require("../../../images/all_images/exotichideaways-1.jpg")}
								/>
								<View style={styles.captionStyle}>
									<Text style={styles.captionTitleStyle} > 
										{data.midTitle_1}
									</Text>
									<Text style={styles.paraStyle}>
										{data.midContent_1}
									</Text>
									<List style={styles.listContainerStyle}>
				                        <ListItem style={styles.listItemStyle}>
				                            <Body>
				                                <Button 
				                                    style={styles.buttonStyle} 
				                                    rounded 
				                                    block
				                                   onPress={() => Actions.WhereToStay()}
				                                >
				                                    <Text style={styles.buttonTextStyle} >See Accommodations</Text>
				                                </Button>
				                            </Body>
				                        </ListItem>
	                        		</List>
								</View>
								 
						</CardItem>
						 <CardItem style={styles.cardItemStyle}>
								<Image 
									style={styles.imageStyle} 
									source={require("../../../images/all_images/exotichideaways-2.jpg")}
								/>
								<View style={styles.captionStyle}>
									<Text style={styles.captionTitleStyle} > 
										{data.midTitle_2}
									</Text>
									<Text style={styles.paraStyle}>
										{data.midContent_2}
									</Text>
									<List style={styles.listContainerStyle}>
				                        <ListItem style={styles.listItemStyle}>
				                            <Body>
				                                <Button 
				                                    style={styles.buttonStyle} 
				                                    rounded 
				                                    block
				                                    onPress={() => Actions.WhatToDo()} 
				                                >
				                                    <Text style={styles.buttonTextStyle} >Explore Activities</Text>
				                                </Button>
				                            </Body>
				                        </ListItem>
	                        		</List>
								</View>
								 
						</CardItem>
						<CardItem style={styles.cardItemStyle}>
											
											<View style={styles.rowStyle}>
												
												<WebView
												        source={{uri: data.video_url}}
												        style={styles.webviewStyle}
				     							 />
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
	topimageStyle:{
		 height: 150,
		 width:100,
		
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
		color: '#7f3f98',
		fontFamily: 'Amatic-Bold',
	},
	listContainerStyle: {
		flex:2,
		width:350,
		paddingRight: 20
	},
	listItemStyle: {
		backgroundColor: 'transparent',

	},
	listTitleStyle: {
		color: '#eb2b24',

	},
	buttonStyle: {
		backgroundColor: '#863266',
		margin: 10
	},
	buttonTextStyle: {
		color: '#ffffff'
	},
	webviewStyle:{
		height:200,
		width:350,
		marginTop:20
	},
	spacerSrtyle: {
		height: 10,
		flex: 1
	}
});
function mapDispatchToProps(dispatch)   {   

	return bindActionCreators(exotic_action,dispatch);   
}
ExoticHideaways = connect(null,mapDispatchToProps)(ExoticHideaways);
export { ExoticHideaways };
