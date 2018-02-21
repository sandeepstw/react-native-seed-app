import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, FooterScreen } from '../common';
import {Container, Content} from 'native-base';
import { Actions, Router, Scene } from 'react-native-router-flux';

const WhatToDoMenu = (onPress) => {
    return (
        <Container>
            <Content style={styles.mainCintainer}>
                <View slyle={styles.containerStyle}>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}>
                            What To Do
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}>
                            In the Water
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            On the Land  
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            Surfing
                        </Button>
                    </CardSection>
                </View>
            </Content>
            <FooterScreen />
        </Container>
    );
}
const styles = {
    mainCintainer: {
        backgroundColor: '#f7952e',
    },
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    }
}

export { WhatToDoMenu };