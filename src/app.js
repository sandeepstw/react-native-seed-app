import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
    <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <StatusBar 
            backgroundColor="#863266" 
            translucent 
            barStyle="light-content" 
          />
          <Main />
        </View>
    </Provider>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#f7952e',
    flex: 1
  },
  statusStyle: {
    backgroundColor: '#863266',
    height: 20
  }
};

export default App;
