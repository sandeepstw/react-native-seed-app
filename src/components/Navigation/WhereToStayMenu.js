import React from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection, FooterScreen } from '../common';
import {Container, Content} from 'native-base';
import { Actions, Router, Scene } from 'react-native-router-flux';

const WhereToStayMenu = (onPress) => {
    return (
        <Container>
            <Content style={styles.mainCintainer}>
                <View slyle={styles.containerStyle}>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}>
                            Where To Stay
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}>
                            Exotic Hideaways
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            Hotels and Condos 
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            B and B and Casita
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            Homes and Villa
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            Deals and  Specials
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.HomeScreen()}> 
                            Hotels Review 
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

export { WhereToStayMenu };