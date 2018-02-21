import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';
import { Container, Content } from 'native-base';
import { Card, CardSection, FooterScreen } from '../../common';

class DealsSpecials extends Component {
	render() {
		return (
			<Container>
				<Content style={styles.container}>
					<Card>
						<CardSection>
							<View style={styles.featuredTitleContainer}>
								<Text style={styles.featuredTitleStyle}>Deals and Specials</Text>
							</View>
						</CardSection>
                        <CardSection>
                                <Image 
                                    style={styles.imageStyle} 
                                    source={require("../../../images/all_images/do-img-12.png")}
                                />
                                <View style={styles.captionStyle}>
                                    <Text style={styles.captionTitleStyle} > 
                                        WHERE TO EAT 
                                    </Text>
                                </View>
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
	spacerSrtyle: {
		height: 10,
		flex: 1
	}
});

export { DealsSpecials };
