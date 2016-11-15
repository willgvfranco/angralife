import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Animated,
  StyleSheet,
  Image,
  Text

} from 'react-native';




export default class Compass extends Component {
  constructor(props) {
    super(props);
    this.state={position: {}};
  }
  componentWillMount(){
    this._animeRotation = new Animated.Value(0);
  }
    watchID: ?number = null;
  componentDidMount() {
      this.startAnimation();



        navigator.geolocation.getCurrentPosition(
         (position) => {
           var initialPosition = position.coords;
           this.setState({position: initialPosition});
         },
         (error) => console.log(error),
         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
       );
       this.watchID = navigator.geolocation.watchPosition((position) => {
         var lastPosition = position.coords;
         this.setState({position: lastPosition});
       });
  }
  startAnimation() {
    Animated.timing(this._animeRotation, {
      toValue: -this.props.magn, //<-- What put here?
      duration: 1000,
    }).start(() => {
      this.startAnimation();
    });
  }
  render() {
    var interpolatedRotateAnimation = this._animeRotation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });
    return (
      <View>
        <Animated.View style={[styles.box, {transform: [{rotate: interpolatedRotateAnimation}]}]}>
          <Image style={styles.box} source={require('../../images/CompassStoreIcon.png')}></Image>
        </Animated.View>
        <View style={styles.boxTextos}>
          <Text style={styles.textosInfo}>Direção: {this.props.magn} graus</Text>
          <Text style={styles.textosInfo}>Latitude: {this.state.position.latitude}º</Text>
            <Text style={styles.textosInfo}>Longitude: {this.state.position.longitude}º</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxTextos: {
    marginTop: 30,
    alignSelf: 'center',
    flex: 1,
  //  textAlign: 'center',
  //  color: '#fff'
  },
  textosInfo: {
    color: '#fff',
        fontSize: 16
  },
  box: {
    width: 300,
    height: 300
  },
  text: {
    fontSize: 16,
  //  color: '#000',
//    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 5
  }
});
