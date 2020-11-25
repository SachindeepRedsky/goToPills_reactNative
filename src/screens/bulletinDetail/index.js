import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  Text,
  Image,
  TextInput,
  Picker,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MainHeader from '../../components/MainHeader';
import styles from './styles';
export default class BulletinDetail extends Component {
  state = {
    header: 'Abilify',
    Data: [
      {name: 'Generic Name:', title: ''},
      {name: 'Drua Category:', title: ''},
      {name: 'Litiqation Alert Level:', title: ''},
    ],
    names: [
      {name: 'Cautionary Conditions:', title: ''},
      {name: 'Off-label Uses:', title: ''},
      {name: 'Approved Uses:', title: ''},
      {name: 'Off-label Uses:', title: ''},
      {name: 'Adverse Events:', title: ''},
      {name: 'Litigation:', title: ''},
    ],
  };

  render() {
    return (
      <View style={styles.MainBox}>
        <MainHeader navigate={this.props.navigation} title={'abc'} />
        <ScrollView>
          {this.state.Data.map((item, index) => (
            <View style={styles.Item1}>
              <Text style={styles.datatext}>{item.name}</Text>
              <Text style={styles.titleText}>
                {item.title ? item.title : 'Finding Bulletin...'}
              </Text>
            </View>
          ))}
          {this.state.names.map((item, index) => (
            <View style={styles.Item}>
              <View>
                <Text style={styles.datatext}>{item.name}</Text>
              </View>
              <Text style={styles.titleText1}>
                {item.title ? item.title : 'Finding Bulletin...'}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
