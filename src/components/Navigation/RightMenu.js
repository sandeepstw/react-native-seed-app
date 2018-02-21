import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content } from 'native-base';
import Collapsible from 'react-native-collapsible';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from '../common';

class RightMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isCollapsed: true,
          ifCollapsed: true,
          inCollapsed: true
        };
    }

    whatToDo() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    whereToStay() {
        this.setState({
            ifCollapsed: !this.state.ifCollapsed
        });
    }
    usefulLinks() {
        this.setState({
            inCollapsed: !this.state.inCollapsed
        });
    }
    render() {
        return (
            <Container>
                <Content style={styles.mainCintainer}>
                    <View slyle={styles.containerStyle}>

                        <CardSection>
                            <Button onPress={this.whatToDo.bind(this)}> 
                                WHAT TO DO  
                            </Button>
                            <Text style={styles.arrowStyle}>+</Text>
                        </CardSection>
                        <Collapsible collapsed={this.state.isCollapsed}>
                            <View slyle={styles.containerStyle}>
                                <CardSection>
                                    <Button onPress={() => Actions.WhatToDo()}>
                                        What To Do
                                    </Button>
                                </CardSection>
                                <CardSection>
                                    <Button onPress={() => Actions.InWater()}>
                                        In the Water
                                    </Button>
                                </CardSection>
                                <CardSection>
                                    <Button onPress={() => Actions.OnLand()}> 
                                        On the Land  
                                    </Button>
                                </CardSection>
                                <CardSection>
                                    <Button onPress={() => Actions.Surfing()}> 
                                        Surfing
                                    </Button>
                                </CardSection>
                            </View>
                        </Collapsible>
                        <CardSection>
                            <Button onPress={this.whereToStay.bind(this)}> 
                                WHERE TO STAY  
                            </Button>
                            <Text style={styles.arrowStyle}>+</Text>
                        </CardSection>
                        <Collapsible collapsed={this.state.ifCollapsed}>
                            <View slyle={styles.containerStyle}>
                                <CardSection>
                                    <Button onPress={() => Actions.WhereToStay()}>
                                        Where To Stay
                                    </Button>
                                </CardSection>
                                <CardSection>
                                    <Button onPress={() => Actions.ExoticHideaways()}>
                                        Exotic Hideaways
                                    </Button>
                                </CardSection>

                                
                                <CardSection>
                                    <Button onPress={() => Actions.HomesAndVilla()}> 
                                        Homes and Villa
                                    </Button>
                                </CardSection>
                               
                                <CardSection>
                                    <Button onPress={() => Actions.HotelsReview()}> 
                                        Hotels Review 
                                    </Button>
                                </CardSection>
                            </View>
                        </Collapsible>
                        <CardSection>
                            <Button onPress={() => Actions.WhereToEat()}> 
                                WHERE TO EAT
                            </Button>
                        </CardSection>
                       
                        
                        <CardSection>
                            <Button onPress={() => Actions.ContactScreen()}> 
                                CONTACT US
                            </Button>
                        </CardSection>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = {
    mainCintainer: {
        backgroundColor: '#f7952e',
    },
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    arrowStyle: {
        fontSize: 18,
        paddingTop: 7,
        color: '#efed83',
        fontWeight: 'bold'
    }
};

export { RightMenu };
