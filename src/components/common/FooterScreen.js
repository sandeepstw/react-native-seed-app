import React from 'react';
import { Linking } from 'react-native';
import { Footer, Button, FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


const FooterScreen = () => {
    return (
        <Footer>
            <FooterTab style={styles.footerStyle}>
                <Button onPress={() => Linking.openURL('https://www.facebook.com/')}>
                    <Icon name="facebook" size={15} color="#ffffff" />
                </Button>
                <Button onPress={() => Linking.openURL('https://twitter.com')}>
                    <Icon name='twitter' size={15} color="#ffffff" />
                </Button>
                <Button onPress={() => Linking.openURL('https://plus.google.com')}>
                    <Icon name='google-plus' size={15} color="#ffffff" />
                </Button>
                <Button onPress={() => Linking.openURL('https://www.instagram.com')}>
                    <Icon name='instagram' size={15} color="#ffffff" />
                </Button>
            </FooterTab>
        </Footer>
    );
};

const styles = {
	footerStyle: {
		backgroundColor: '#863266'
	}
};

export { FooterScreen };
