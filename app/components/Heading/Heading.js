import React, { Component } from 'react';

const ReactNativeHeading = require('react-native-heading-master');
const { DeviceEventEmitter } = require('react-native');
import {
  AppRegistry,
  View

} from 'react-native';

export default class Heading extends Component {
  constructor(props) {
  super(props);
  this.state = {
    headingIsSupported: ''
  };
}

  componentDidMount() {
    ReactNativeHeading.start(1)
    .then(didStart => {
        this.setState({
            headingIsSupported: didStart,
        })
    })

    DeviceEventEmitter.addListener('headingUpdated', data => {
        console.log('New heading is:', data.heading);
    });

  }
  componentWillUnmount() {
    ReactNativeHeading.stop();
    DeviceEventEmitter.removeAllListeners('headingUpdated');
  }

  render() {
    return (
      <View></View>
    )
  }


}
