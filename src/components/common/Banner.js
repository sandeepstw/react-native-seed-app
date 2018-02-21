import React from 'react';
import { Image, View } from 'react-native';

const Banner = (props) => {
	const { imageStyle, myStyle } = styles;

	return (
		
		<View style={myStyle}>
			<Image style={imageStyle} source={{ uri: props.bannerUrl }} />
		</View>
	);	
};

const styles =	{
	
	imageStyle: {

		width: 400,
		height: 300,
	},
	myStyle: {
		
		justifyContent: 'center',
		alignItems: 'center',
		height: 300,
		
	},
	
};

export { Banner };
