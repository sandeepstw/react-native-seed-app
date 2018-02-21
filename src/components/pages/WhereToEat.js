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
	Button,
	List,
	ListItem,
	Left,
	Body,
} from 'native-base';
import { Card, FooterScreen } from '../common';
import { connect } from 'react-redux';
import { where_to_eat_action } from '../../actions';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
let section_top=[];
let section_middle=[];
let section_bottom=[];
const SIZE = 40;

class WhereToEat extends Component {
	render() {
		var data = this.props.payload;
		var cap_img_txt1 = data.first_section;
		var cap_img_txt2 = data.last_section;
		var section_1 = data.section_1;
		var section_2 = data.section_2;
		var section_3 = data.section_3;
		console.log(data);
		var t_index;
	    for(let i = 0; i < section_1.length; i++)
	    {
	    	t_index ={i};
	    	sec1 = section_1[i];
	    	section_top.push(
			    					<View key={i}>
			    							<CardItem style={styles.cardItemStyle}>
					                                <Image
					                                    style={styles.imageStyle}
					                                    source={require("../../images/all_images/eat-img-2.png")}
					                                />
											</CardItem>
											<CardItem style={styles.cardItemStyle}>
												<View style={styles.rowStyle}>
													<Text style={styles.innerHeader}>{sec1.title}</Text>
												</View>
											</CardItem>
											<CardItem style={styles.cardItemStyle}>
												<View style={styles.rowStyle}>
													<Text style={styles.paraStyle}>
														{sec1.description}
													</Text>
													<List style={styles.listContainerStyle}>
								                        <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>PRICE:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec1.price}</Text>
								                            </Body>
								                        </ListItem>
								                        <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>HOURS:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec1.hour}</Text>
								                            </Body>
								                        </ListItem>
								                         <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>LOCATION:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec1.location}</Text>
								                            </Body>
								                        </ListItem>
							                    	</List>
												</View>
											</CardItem>
			    					</View>
					            );
	    }
	    for(let i = 0; i < section_2.length; i++)
	    {
	    	t_index ={i};
	    	sec2 = section_2[i];
	    	section_middle.push(
			    					<View key={i}>
			    							<CardItem style={styles.cardItemStyle}>
					                                <Image
					                                    style={styles.imageStyle}
					                                    source={require("../../images/all_images/eat-img-6.jpg")}
					                                />
											</CardItem>
											<CardItem style={styles.cardItemStyle}>
												<View style={styles.rowStyle}>
													<Text style={styles.innerHeader}>{sec2.title}</Text>
												</View>
											</CardItem>
											<CardItem style={styles.cardItemStyle}>
												<View style={styles.rowStyle}>
													<Text style={styles.paraStyle}>
														{sec2.description}
													</Text>
													<List style={styles.listContainerStyle}>
								                        <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>PRICE:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec2.price}</Text>
								                            </Body>
								                        </ListItem>
								                        <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>HOURS:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec2.hour}</Text>
								                            </Body>
								                        </ListItem>
								                         <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>LOCATION:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec2.location}</Text>
								                            </Body>
								                        </ListItem>
							                    	</List>
												</View>
											</CardItem>
			    					</View>
					            );
	    }
	    for(let i = 0; i < section_3.length; i++)
	    {
	    	t_index ={i};
	    	sec3 = section_3[i];
	    	section_bottom.push(
			    					<View key={i}>
			    							<CardItem style={styles.cardItemStyle}>
					                                <Image
					                                    style={styles.imageStyle}
					                                    source={require("../../images/all_images/eat-img-10.jpg")}
					                                />
											</CardItem>
											<CardItem style={styles.cardItemStyle}>
												<View style={styles.rowStyle}>
													<Text style={styles.innerHeader}>{sec3.title}</Text>
												</View>
											</CardItem>
											<CardItem style={styles.cardItemStyle}>
												<View style={styles.rowStyle}>
													<Text style={styles.paraStyle}>
														{sec3.description}
													</Text>
													<List style={styles.listContainerStyle}>
								                        <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>PRICE:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec3.price}</Text>
								                            </Body>
								                        </ListItem>
								                        <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>HOURS:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec3.hour}</Text>
								                            </Body>
								                        </ListItem>
								                         <ListItem style={styles.listItemStyle}>
								                            <Left>
								                                <Text style={styles.listTitleStyle}>LOCATION:</Text>
								                            </Left>
								                            <Body>
								                                <Text style={styles.listPriceStyle}>{sec3.location}</Text>
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
								<Text style={styles.featuredTitleStyle}>Where To Eat</Text>
							</View>
						</CardItem>
                        {section_top}

						{section_middle}

						{section_bottom}
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
				backgroundColor: 'rgba(0, 0, 0, 0)'
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
	listTitleOrangeStyle: {
		color: '#fd8b09',

	},
	listPriceStyle:{
		color: '#ffffff',
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

	return bindActionCreators(where_to_eat_action,dispatch);
}
WhereToEat = connect(null,mapDispatchToProps)(WhereToEat);
export { WhereToEat };
