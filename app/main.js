
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import * as reducers from './redux/reducer';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import Inicial from './containers/Inicial/Inicial';
import Places from './containers/Places/Places';

// import Localizacao from './containers/Localizacao/Localizacao';
// import MarService from './containers/MarService/MarService';
// import TabuaMare from './containers/TabuaMare/TabuaMare';
// import Metereologia from './containers/Metereologia/Metereologia';
var Orientation = require('react-native-orientation');


var ROUTES = {
Inicial,
Places
}

const createStoreWithMiddleware = compose(applyMiddleware(thunk),devTools())(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  }
})

export default class Main extends Component {
  // componentWillMount() {
  //   store.dispatch(loadAuth());
  // }

//   _orientationDidChange(orientation) {
//   if (orientation == 'LANDSCAPE') {
//     Orientation.lockToPortrait();
//   } else {
//     //do something with portrait layout
//   }
// };
//   componentWillMount() {
//      //The getOrientation method is async. It happens sometimes that
//      //you need the orientation at the moment the js starts running on device.
//      //getInitialOrientation returns directly because its a constant set at the
//      //beginning of the js code.
//      var initial = Orientation.getInitialOrientation();
//      if (initial === 'PORTRAIT') {
//        Orientation.lockToPortrait();
//      } else {
//        Orientation.lockToPortrait();
//      }
//    };
//   componentDidMount() {
//     Orientation.lockToPortrait(); //this will lock the view to Portrait
//     //Orientation.lockToLandscape(); //this will lock the view to Landscape
//     //Orientation.unlockAllOrientations(); //this will unlock the view to all Orientations
//
//     Orientation.addOrientationListener(this._orientationDidChange);
// };

  renderScene (route, navigator) {

    var Component = ROUTES[route.name];
    return <Component route={route} storeLol={store} navigator={navigator} />;
  };

  render() {
    return (
      <Provider store={store}>
        <Navigator
        style={styles.container}
        initialRoute={{name: 'Places'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
        />
      </Provider>
    );
  };
};
