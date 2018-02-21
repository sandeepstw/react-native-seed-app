import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
    const {
        buttonStyle,
        textStyle
    } = styles;
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={buttonStyle}
        >
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 5,
        marginRight: 5,
        height: 40
    },
    textStyle: {
        fontSize: 16,
        alignSelf: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        color: '#efed83',
    }
};

export { Button };
