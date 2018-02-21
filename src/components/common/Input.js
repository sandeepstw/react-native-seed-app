import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {
        inputStyle,
        labelStyle,
        containerStyle
    } = styles;
    return (
        <View style={containerStyle}>
            <Text slyle={labelStyle}>{ label }</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
               
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        backgroundColor:'#f9f9f9',
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        width:250,
        height:30

    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    }
};

export { Input };
