import React, { Component } from 'react';
import { Container, View, Left, Body, Right, Button, Icon, Title } from 'native-base';

class Header extends Component {
  render() {
    return (
      <Container>
        <View style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </View>
      </Container>
    );
  }
}

const styles = {
    header: {
		height: 75,
		justifyContent: 'center',
		backgroundColor: '#863266',
	},
	titleStyle: {
		alignSelf: 'center',
		height: 60,
		width: 62,
		paddingTop: 10
	},
	headerLogo: {
		height: 50,
		width: 62
	}
};

export { Header };
