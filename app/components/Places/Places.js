import React, { Component } from 'react';

import {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Platform,
  ScrollView

} from 'react-native';


import { getPlaces } from '../../actions/places';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxTitulo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop: 10,
    paddingBottom: 10
  },
  titulo: {
    color: '#41A8DE',
    fontSize: 18
  },
  headerMaster: {
    height: (Platform.OS === 'ios') ? 72 : 54
  },
  footer: {
    height: 60
  },
});

class Places extends Component {
  componentDidMount() {
    this.props.getPlaces();
    let lugares = this.props.places;
  };

  renderPlaces() {
    const places = this.props.places;
    console.log(places);
    if(places) {
      return this.props.places.map((place) => {
        return (
          <View key={place.id}>
            <Text>oi</Text>
            <Text>{place.nome}</Text>
              <Text>{place.localizacao}</Text>
                <Text>{place.categoria}</Text>
                  <Text>{place.usuario}</Text>

          </View>
        )
      })
    }
    else {
      return (
        <View><Text>oi</Text></View>
      )
    }
  }
  render() {

    return (
      <View>
        <View>

          {this.renderPlaces()}

        </View>

      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Places);
