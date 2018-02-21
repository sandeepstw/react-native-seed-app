import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import { connect } from 'react-redux';
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
import { Card } from '../../common';
import {
    selectedHotel
} from '../../../actions';

const SIZE = 40;
class HotelItem extends Component {
	onRowPress() {
		const { library } = this.props;
		Actions.PlayaEscondida({ library });
	}
    render() {
		const { 
			id, 
			title, 
			image, 
			description, 
			pricedes1, 
			pricedes2,
			price1,
			price2,
			detaildescription,
			features,
			room_features,
			slider
		} = this.props.library;

        return (
            <Container>
            <Content style={styles.container}>
                <Card>
                    <CardItem style={styles.cardItemStyle}>
                            <Image 
                                style={styles.imageStyle} 
                                source={{ uri: image }} 
                            />
                    </CardItem>
                    <CardItem style={styles.cardItemStyle}>
                        <View style={styles.rowStyle}> 
                            <Text style={styles.innerHeader}>{title}</Text>
                        </View>
                    </CardItem>
                    <CardItem style={styles.cardItemStyle}>
                        <View style={styles.rowStyle}>
                            <Text style={styles.paraStyle}>
                                {description}
                            </Text>
                        </View>
                    </CardItem>
                    
                    <List style={styles.listContainerStyle}>
                        <ListItem style={styles.listItemStyle}>
                            <Left>
                                <Text style={styles.listTitleStyle}>{pricedes1}</Text>
                            </Left>
                            <Body>
                                <Text note>{price1}</Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItemStyle}>
                            <Left>
                                <Text style={styles.listTitleStyle}>{pricedes2}</Text>
                            </Left>
                            <Body>
                                <Text note>{price2}</Text>
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
                                    onPress={this.onRowPress.bind(this)}
                                >
                                    <Text style={styles.buttonTextStyle} >Book Now</Text>
                                </Button>
                            </Body>
                        </ListItem>
                    </List>
                </Card>
            </Content>
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

const mapStateToProps = (state) => {
    const id = state.selectedLibraryId;
    return { id };
};

export default connect(mapStateToProps, { selectedHotel })(HotelItem);
