import React, { Component } from 'react'; 
import { View } from 'react-native';
import MapView from 'react-native-maps'; 

class MapScreen extends Component { 

    render() { 
        return ( 
            <View style={{ flex: 1 }}>
                <MapView 
                    style={styles.map}
                    initialRegion={{
                        latitude: 20.869781046134452,
                        longitude: -105.44121477752923,
                        latitudeDelta: 0.005762149787940984,
                        longitudeDelta: 0.007399879395975972,
                    }}
                /> 
            </View>
        ); 
    } 
}

const styles = {
    map: {
		flex: 1,
		width: null,
    }
};

export { MapScreen };
