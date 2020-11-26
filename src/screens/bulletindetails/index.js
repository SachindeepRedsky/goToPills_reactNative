import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import MainHeader from '../../components/MainHeader';
import * as api from '../../api/bulletin-service';
import styles from './styles';
import HTMLView from 'react-native-htmlview';

export default class BulletinDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletin: {},
      header:'Finding Bulletin...',
      isLoading: false,
      skip: 0,
    };
  }
  // state = {
  //   header: 'Abilify',
  //   Data: [
  //     {name: 'Generic Name:', title: ''},
  //     {name: 'Drua Category:', title: ''},
  //     {name: 'Litiqation Alert Level:', title: ''},
  //   ],
  //   names: [
  //     {name: 'Cautionary Conditions:', title: ''},
  //     {name: 'Off-label Uses:', title: ''},
  //     {name: 'Approved Uses:', title: ''},
  //     {name: 'Off-label Uses:', title: ''},
  //     {name: 'Adverse Events:', title: ''},
  //     {name: 'Litigation:', title: ''},
  //   ],
  // };
  componentDidMount() {
    let bullID = this.props.navigation.state.params.bullID;
    console.log(
      'bullIDbullIDbullIDbullIDbullIDbullIDbullIDbullIDbullIDbullID',
      bullID,
    );
    this.getBullitenById(bullID);
  }
  getBullitenById = async (bullID) => {
    this.setState({isLoading: true});
    let data = await api.bulletinByID(bullID);
    console.log('data..............................', data);
    this.setState({
      bulletin: data,
      header:data.brandName,
      isLoading: false,
    });
  };
  render() {
    return (
      <View style={styles.MainBox}>
        <MainHeader navigate={this.props.navigation} title={this.state.header} />
        <ScrollView style={{margin: 12}}>
          <View style={styles.Item1}>
            <Text style={styles.datatext}>{'Generic Name:'}</Text>
            <Text style={styles.titleText}>
              {this.state.bulletin && this.state.bulletin.GenericName
                ? this.state.bulletin.GenericName
                : 'Finding Bulletin...'}
            </Text>
          </View>
          <View style={styles.Item1}>
            <Text style={styles.datatext}>{'Drug Category:'}</Text>
            <Text style={styles.titleText}>
              {this.state.bulletin && this.state.bulletin.drugCat
                ? this.state.bulletin.drugCat
                : 'Finding Bulletin...'}
            </Text>
          </View>
          <View style={styles.Item1}>
            <Text style={styles.datatext}>{'Litigation Alert Level:'}</Text>
            <Text style={styles.titleText}>
              {this.state.bulletin && this.state.bulletin.litAlertLvl
                ? this.state.bulletin.litAlertLvl
                : 'Finding Bulletin...'}
            </Text>
          </View>
          <View style={styles.Item}>
            <View>
              <Text style={styles.datatext}>{'Cautionary Conditions:'}</Text>
            </View>
            <Text style={styles.titleText1}>
              {this.state.bulletin && this.state.bulletin.excond
                ? this.state.bulletin.excond
                : 'Finding Bulletin...'}
            </Text>
          </View>
          <View style={styles.Item}>
            <View>
              <Text style={styles.datatext}>{'Off-label Uses:'}</Text>
            </View>
            <Text style={styles.titleText1}>
              {this.state.bulletin && this.state.bulletin.uses
                ? this.state.bulletin.uses
                : 'Finding Bulletin...'}
            </Text>
          </View>
          <View style={styles.Item}>
            <View>
              <Text style={styles.datatext}>{'Approved Uses:'}</Text>
            </View>
            <Text style={styles.titleText1}>
            {this.state.bulletin && this.state.bulletin.approvedUse ? (
              <HTMLView
              value={this.state.bulletin.approvedUse} style={styles.titleText1}>
              </HTMLView>
            ) : (
              <Text style={styles.titleText1}>{'Finding Bulletin...'}</Text>
            )}
            </Text>
          </View>
          <View style={styles.Item}>
            <View>
              <Text style={styles.datatext}>{'Off-label Uses:'}</Text>
            </View>
            <Text style={styles.titleText1}>
            {this.state.bulletin && this.state.bulletin.offLabelUse ? (
              <HTMLView
              value={this.state.bulletin.offLabelUse} style={styles.titleText1}>
              </HTMLView>
            ) : (
              <Text style={styles.titleText1}>{'Finding Bulletin...'}</Text>
            )}
            </Text>
          </View>
          <View style={styles.Item}>
            <View>
              <Text style={styles.datatext}>{'Adverse Events:'}</Text>
            </View>
            {this.state.bulletin && this.state.bulletin.adverseEvents ? (
              <HTMLView
              value={this.state.bulletin.adverseEvents} style={styles.titleText1}>
              </HTMLView>
            ) : (
              <Text style={styles.titleText1}>{'Finding Bulletin...'}</Text>
            )}
          </View>

          <View style={styles.Item}>
            <View>
              <Text style={styles.datatext}>{'Litigation:'}</Text>
            </View>
            {this.state.bulletin && this.state.bulletin.litigation ? (
              <HTMLView
              value={this.state.bulletin.litigation} style={styles.titleText1}>
              </HTMLView>
            ) : (
              <Text style={styles.titleText1}>{'Finding Bulletin...'}</Text>
            )}
          </View>
        </ScrollView>
      </View>
    );
  }
}
