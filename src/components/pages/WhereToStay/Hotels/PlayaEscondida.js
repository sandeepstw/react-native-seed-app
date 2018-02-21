import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
    Image,
    Modal
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import Collapsible from 'react-native-collapsible';
import { 
	Container, 
	Content, 
	CardItem,
	List,
	ListItem,
    Left,
    Right,
    Body,
	Button
} from 'native-base';
import { Card, FooterScreen, CardSection } from '../../../common';
import FormScreen from './FormScreen';
import {
    selectedHotel
} from '../../../../actions';

class PlayaEscondida extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          modalVisible: false,
          isCollapsed: true,
          ifCollapsed: true,
          inCollapsed: true
        };
        
    }
    setModalVisible(visible) { 
        this.setState({ modalVisible: visible }); 
    }

    roomFeatures() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    roomRates() {
        this.setState({
            ifCollapsed: !this.state.ifCollapsed
        });
    }
    hotelAmenities() {
        this.setState({
            inCollapsed: !this.state.inCollapsed
        });
    }
    formGetrow() {
        const { library } = this.props;
        return (
            <FormScreen library={library} />
        );
    }
	render() {
        let room_feature=[];
      
        var data = this.props.library.room_features;
       
        
        for(let i = 0; i < data.length; i++)
        {
           
            
            featur = data[i];
            

            room_feature.push( 
                                   
                                          <ListItem key={i} style={styles.listItemStyle}>
                                                <Body>
                                                    <Text style={styles.listTitleStyle} note>{featur.feature}</Text>
                                                </Body>
                                          </ListItem>   
                                   
                                );
        }
       
       
        const datacarousel = this.props.library.slider;
		return (
			<Container>
				<Content style={styles.container}>
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
                        <CardItem style={styles.cardItemStyle}>
                            <View style={styles.featuredTitleContainer}>
                                <Text style={styles.featuredTitleStyle}>Where to Stay</Text>
                            </View>
                        </CardItem>
                        <CardItem style={styles.cardItemStyle}>
                                <Image 
                                    style={styles.imageStyle} 
                                    source={{ uri: this.props.library.image }} 
                                />
                        </CardItem>
                        <CardItem style={styles.cardItemStyle}>
                            <View style={styles.rowStyle}> 
                                <Text style={styles.innerHeader}>{this.props.library.title}</Text>
                            </View>
                        </CardItem>
                        <CardItem style={styles.cardItemStyle}>
                            <View style={styles.rowStyle}>
                                <Text style={styles.paraStyle}>
                                    {this.props.library.detaildescription}
                                </Text>
                            </View>
                        </CardItem>
                        <View> 
                            <Modal
                                style={styles.modelStyle} 
                                animationType="slide" 
                                transparent={false} 
                                visible={this.state.modalVisible} 
                                onRequestClose={() => { ('Modal has been closed.'); }} 
                            > 
                                <Content style={styles.container}>
                                    <Button 
                                        style={styles.buttonStyle} 
                                        rounded 
                                        block
                                        onPress={() => { 
                                            this.setModalVisible(!this.state.modalVisible); 
                                        }} 
                                    >
                                        <Text style={styles.buttonTextStyle} >Close</Text>
                                    </Button>
                                    <View style={styles.formContainer}>
                                        { this.formGetrow() }
                                    </View>
                                </Content> 
                            </Modal> 
                        </View>
                        <List style={styles.listContainerStyle}>
                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.listTitleStyle}>High Season:</Text>
                                </Left>
                                <Body>
                                    <Text note>$ 270</Text>
                                </Body>
                            </ListItem>
                            <ListItem style={styles.listItemStyle}>
                                <Left>
                                    <Text style={styles.listTitleStyle}>Low season:</Text>
                                </Left>
                                <Body>
                                    <Text note>$ 196</Text>
                                </Body>
                            </ListItem>
                        </List>
                        <List style={styles.listContainerStyle}>
                            <ListItem style={styles.listItemStyle}>
                                <Body>
                                    <Button 
                                        style={styles.buttonStyle} 
                                        rounded 
                                        block
                                        onPress={() => this.setModalVisible(true)}
                                    >
                                        <Text style={styles.buttonTextStyle} >Book Now</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        </List>
                    </Card>
                    <Card>
                        <List style={styles.listContainerStyle}>
                            <ListItem
                                style={styles.listItemStyle}
                                onPress={this.roomFeatures.bind(this)}
                            >
                                <Body>
                                    <Text style={styles.buttonTextStyle} >Room Features</Text>  
                                </Body>
                                <Right>
                                    <Text style={styles.arrowStyle}>+</Text>
                                </Right>
                            </ListItem>
                        </List>
                        <Collapsible collapsed={this.state.isCollapsed}>
                            <List key={this.props.library.title} style={styles.listContainerStyle}>
                                {room_feature}
                               
                            </List>
                        </Collapsible>
                        <List style={styles.listContainerStyle}>
                            <ListItem 
                                style={styles.listItemStyle}
                                onPress={this.roomRates.bind(this)}
                            >
                                <Body>
                                    <Text style={styles.buttonTextStyle} >Rates</Text>
                                </Body>
                                <Right>
                                    <Text style={styles.arrowStyle}>+</Text>
                                </Right>
                            </ListItem>
                        </List>
                        <Collapsible collapsed={this.state.ifCollapsed}>
                            <List style={styles.listContainerStyle}>
                                <ListItem style={styles.listItemStyle}>
                                    <Left>
                                        <Text style={styles.listTitleStyle}>{this.props.library.pricedes1}</Text>
                                    </Left>
                                    <Body>
                                        <Text note>{this.props.library.price1}</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={styles.listItemStyle}>
                                    <Left>
                                        <Text style={styles.listTitleStyle}>{this.props.library.pricedes2}</Text>
                                    </Left>
                                    <Body>
                                        <Text note>{this.props.library.price2}</Text>
                                    </Body>
                                </ListItem>
                                <ListItem style={styles.listItemStyle}>
                                    <Left>
                                        <Text style={styles.listTitleStyle}>{this.props.library.pricedes3}</Text>
                                    </Left>
                                    <Body>
                                        <Text note>{this.props.library.price3}</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </Collapsible>
                        <List style={styles.listContainerStyle}>
                            <ListItem 
                                style={styles.listItemStyle}
                                onPress={this.hotelAmenities.bind(this)}
                            >
                                <Body>
                                    <Text style={styles.buttonTextStyle} >Amenities</Text>
                                </Body>
                                <Right>
                                    <Text style={styles.arrowStyle}>+</Text>
                                </Right>
                            </ListItem>
                        </List>
                        <Collapsible collapsed={this.state.inCollapsed}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={styles.rowStyle}>
                                    <Text style={styles.paraStyle}>
                                        Swim in the infinity pool overlooking the Pacific 
                                        coastline, swing in your room’s hammock, take a 
                                        refreshing shower on the deck amid treetops. Hang 
                                        out at the beach bar or on a lounge chair while 
                                        you sunbathe. After communing with the sea you can 
                                        go back to the comfort of your canopy bed, and when 
                                        you finish dinner take a walk along the beach under 
                                        a million star canvas.
                                    </Text>
                                </View>
                            </CardItem>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={styles.rowStyle}> 
                                    <Text style={styles.innerHeader}>Facilities and services</Text>
                                </View>
                            </CardItem>
                            <List style={styles.listContainerStyle}>
                                <ListItem style={styles.listItemStyle}>
                                    <Body>
                                        <Text style={styles.listTitleStyle} note>
                                            {this.props.library.features}
                                        </Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </Collapsible>
                    </Card>
					<Card>
						<CardSection style={styles.cardItemStyle}>
                                <Button 
                                    style={{ 
                                        flex: 1, 
                                        height: 40, 
                                        backgroundColor: '#863266', 
                                        margin: 10 
                                    }} 
                                    rounded 
                                    block
                                    onPress={() => Actions.MapScreen()}
                                >
                                    <Text style={styles.buttonTextStyle} >Go To Map</Text>
                                </Button>
						</CardSection>
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
    map: {
        height: 300,
        flex: 1,
		width: null
    },
    modelStyle: {
        marginTop: 60,
        padding: 0
    },
    formContainer: {
        paddingLeft: 5,
        backgroundColor: '#f7952e',
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
        color: '#ffffff',
	},
	spacerSrtyle: {
		height: 10,
		flex: 1
	}
});
const mapStateToProps = (state) => {
   
    const { title, detaildescription } = state.libraries;
    return { title, detaildescription };
};

export default connect(mapStateToProps, { selectedHotel })(PlayaEscondida);
