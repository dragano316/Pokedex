import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhotoList from './components/PhotoList';
import Heading from './components/Heading'
import {Provider} from "react-redux";
import store from "./store";

// create a component
class App extends Component {
  render() {
    return (
        <Provider store={store}>
      <View style={styles.container}>
       <Heading/>
       <PhotoList/>
      </View>
        </Provider>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }
});

export default App;
