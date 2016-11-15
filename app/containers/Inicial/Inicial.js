
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  TouchableHighlight
} from 'react-native';

import { getPlaces } from '../../actions/places';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Inicial extends Component {
  componentDidMount() {
    this.props.getPlaces();
    let lugares = this.props.places;
  };

  render() {

    return (
     <View style={{backgroundColor: '#ffffff',           flex: 1,
                   alignItems: 'center',
                   width: null,
                  height: null}}>
    <Text>oi</Text>
 </View>
    );
  }
}



function mapStateToProps(state) {
  return {
    places: state.places.places
  }
}

function mapDispatchToProps(dispatch, global) {
  return bindActionCreators({getPlaces}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inicial);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: null,
    height: null
  },
  boxLogo: {
    flex: 3
  },
  boxBotoes: {
    flex: 8
  },
  boxEmergencia: {
    flex: 2,
        marginBottom: (Platform.OS === 'ios') ? 10 : 5,
  },
  logo: {
    width: (Platform.OS === 'ios') ? 286 : 286,
    height: (Platform.OS === 'ios') ? 74 : 74,
    marginTop: (Platform.OS === 'ios') ? 40 : 5,
    marginBottom: 40

  },
  botoesImagem: {
    width:286,
    height: 58
  },
  botoesSlider: {
    width: 257,
    height: 49
  },
  botoes: {
    marginBottom:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#e61c29',

  },
  textoFooter: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
