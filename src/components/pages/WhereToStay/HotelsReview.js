import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Linking,
	Text,
	Image,
	
} from 'react-native';
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
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { hotel_review_action } from '../../../actions';
import { Actions } from 'react-native-router-flux';

const SIZE = 40;
let review=[];


class HotelsReview extends Component {
	render() {
		var data = this.props.payload;
		
		var t_index;
	    for(let i = 0; i < data.length; i++)
	    {
	    	t_index ={i};
	    	revieww = data[i];
	    	review.push(
		    				  
		    			<View key={i} style={{borderWidth:1,borderColor:'#ccc',marginTop:5}}>		
                            <CardItem style={styles.cardItemStyle}>
								<Image 
									style={styles.imageStyle} 
									source={require("../../../images/all_images/Review-01-Main.jpg")}
								/>	 
							</CardItem>
							<CardItem style={styles.cardItemStyle}>
								
								<View style={styles.featuredTitleContainer}>
									<Text style={styles.featuredTitleStyle}>{revieww.title}</Text>
								</View>
							</CardItem>
							
							<CardItem style={styles.cardItemStyle}>
								<View style={styles.rowStyle}>
									
									<Text style={styles.paraStyle}>
										{revieww.desc}
									</Text>
								</View>
			 				</CardItem>
							<CardItem style={styles.cardItemStyle}>
								<View style={{alignItems:'center',flex:2}}>
									<Image 
										style={styles.topimageStyle} 
										source={require("../../../images/all_images/tripadvisor_logo.png")}
									/>
								</View>
							</CardItem>
							<CardItem style={styles.cardItemStyle}>
								<View style={{alignItems:'center',flex:2}}>
									<Image 
										style={styles.image} 
										source={require("../../../images/all_images/Review-01-Profile.jpg")}
									/>
								</View>
							</CardItem>
							<CardItem style={styles.cardItemStyle}>
								<View style={styles.featuredTitleContainer}>
									<Text style={styles.featuredTitleStyle}>{revieww.author_name}</Text>
									<Text style={styles.paraStyle}>{revieww.author_addr}</Text>
									<List style={styles.listContainerStyle}>
				                        <ListItem style={styles.listItemStyle}>
				                            <Body>
				                                <Button 
				                                    style={styles.buttonStyle} 
				                                    rounded 
				                                    block
				                                    onPress={() => Linking.openURL(revieww.btn_link)}
				                                >
				                                    <Text 
				                                    onPress={() => Linking.openURL(revieww.btn_link)}
				                                    style={styles.buttonTextStyle} >View More</Text>
				                                </Button>
				                            </Body>
				                        </ListItem>
	                        		</List>
								</View>
								
							</CardItem>
                       </View>
			               
					  );
	    }

	   


		
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						<CardItem style={styles.cardItemStyle}>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Reviews</Text>
							</View>
						</CardItem>
  						{review}
						
						
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
		width: 100,
		height: 100,
		borderRadius:50
	},
	imageStyle: {
        height: 300,
        flex: 1,
        width: null
	},
	topimageStyle:{
		height: 30,
        width: 350,
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
	listIdStyle: {
		color: '#000000',
		width:20,
		marginTop:5

	},
	
	listTitleStyle:{
		
		color: '#000000',
		width:250,
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

function mapDispatchToProps(dispatch)   {   

	return bindActionCreators(hotel_review_action,dispatch);   
}
HotelsReview = connect(null,mapDispatchToProps)(HotelsReview);
export { HotelsReview };
