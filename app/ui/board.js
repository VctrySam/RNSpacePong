/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import BackgroundScreen from './widgets/background';
import PlayerPanel from './widgets/playerPanel';
import { Loop, World, Stage } from 'react-game-kit/native';
import {observer} from 'mobx-react/native';

class Board extends Component {

  componentDidMount(){

  }

  render() {
    const { levelCount } = this.props.gameManager;
    return (
      <BackgroundScreen>
        <View style={styles.container}>
          <View>
            <Text style={styles.welcome}>
              {` Welcome to Level ${levelCount} `}
            </Text>
          </View>
          <Loop>
            <Stage>
              <World>
                <PlayerPanel style={ styles.playerPanel }/>
              </World>
            </Stage>
          </Loop>
        </View>
      </BackgroundScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  playerPanel: {
    height: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default observer(['gameManager'])(Board)

