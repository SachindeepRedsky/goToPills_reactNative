//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  Text,
  ScrollView,
  Linking,
  TextInput,
  Picker,
  TouchableOpacity,
} from 'react-native';
import MainHeader from '../../components/MainHeader';
import { searchStrings } from '../../constants/title';
import styles from './styles';
import * as api from '../../api/bulletin-service';
import * as api1 from '../../api/search-service';
import Autocomplete from 'react-native-autocomplete-input';

var bullitens = [];
var conditions = [];

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prescribedText: String,
      diagnosedText: String,
      durationText: String,
      ageText: String,
      hasDurationFocus: Boolean,
      hasAgeFocus: Boolean,
      bullitensQuery: '',
      conditionQuery: '',
      hideResults: false,
      screenHeight: String,
      screenWidth: Number,
      selectedDurationType: 'Days',
      selectedAgeType: 'Years',
      selectedGender: 'Male'
    };
  }

  onChangeText(text, val) {
    if (val == 1) {
      this.setState({
        durationText: text
      })
      console.log("CHANGING TEXT::::::::", this.state.durationText);
    } else {
      this.setState({
        ageText: text
      })
      console.log("CHANGING TEXT::::::::", this.state.ageText);
    }
  }

  componentDidMount() {
    this.getBullitens();
    this.getConditions();
  }

  getBullitens = async () => {
    const data = await api.allBulletinsNames();
    for (var i = 0; i < data.length; i++) {
      bullitens.push({ name: data[i] });
    }
  }

  getConditions = async () => {
    const data = await api.allConditionNames();
    for (var i = 0; i < data.length; i++) {
      conditions.push({ name: data[i] });
    }
  }

  findBullitens(query) {
    if (query === '') {
      return [];
    }
    const regex = new RegExp(`^${query.trim()}`, 'i');
    return bullitens.filter(
      (bullit) => bullit.name.search(regex) >= 0,
    );
  }

  findConditions(query) {
    if (query === '') {
      return [];
    }
    const regex = new RegExp(`^${query.trim()}`, 'i');
    return conditions.filter(
      (condition) => condition.name.search(regex) >= 0,
    );
  }

  selectBullitens(item) {
    // console.log('selecting item :: ', item);
    this.setState({
      //   selectedCustomerId: item.id,
      bullitensQuery: item.name,
      hideResults: true,
    });
  }

  selectConditions(item) {
    // console.log('selecting item :: ', item);
    this.setState({
      //   selectedCustomerId: item.id,
      conditionQuery: item.name,
      hideResults: true,
    });
  }

  onSearchButton = async () => {
    console.log(this.state.bullitensQuery);
    console.log(this.state.conditionQuery);
    console.log(this.state.ageText);
    console.log(this.state.selectedAgeType);
    console.log(this.state.durationText);
    console.log(this.state.selectedDurationType);
    console.log(this.state.selectedGender);
    var drug = {
      ms: this.state.bullitensQuery,
      reason: this.state.conditionQuery,
      condition: this.state.conditionQuery,
      age: this.state.ageText,
      age_type: this.state.selectedAgeType,
      duration: this.state.durationText,
      duration_type: this.state.selectedDurationType,
      gender: this.state.gender
    }
    const res = await api1.bulletinSearch(drug);
    console.log("SEARCH RESPONSE::::::::", res);
  }

  render() {

    const { bullitensQuery } = this.state;
    const { conditionQuery } = this.state;
    const data = this.findBullitens(bullitensQuery);
    const data1 = this.findConditions(conditionQuery);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
        <MainHeader navigate={this.props.navigation} title={'Search'} />
        <ScrollView>
          <Text style={styles.textstyle}>{searchStrings.approvedTitle}</Text>
          <View style={{ width: '90%', alignSelf: 'center', height: '100%' }}>
            <View style={styles.inputView}>
              <Text style={styles.Text}>{searchStrings.prescribedLable}</Text>
              <Autocomplete
                underlineShow={true}
                style={styles.autocompleteText}
                // containerStyle={this.state.hideResults ? { height: 100 } : { height: 100 }}
                listContainerStyle={styles.autocompleteListContainerStyle}
                listStyle={styles.autocompleteListStyle}
                // placeholder="Enter Customer Name"
                data={
                  data.length === 1 && comp(bullitensQuery, data[0].name) ? [] : data
                }
                defaultValue={bullitensQuery}
                hideResults={this.state.hideResults}
                inputContainerStyle={styles.autocompleteInputContainer}
                onChangeText={(text) =>
                  this.setState({ bullitensQuery: text, hideResults: false })
                }
                renderItem={({ item, i }) => (
                  <TouchableOpacity onPress={() => this.selectBullitens(item)}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
              {/* <TextInput
                style={styles.inputBox}
                value={this.state.prescribedText}
                onChangeText={text => this.onChangeText(text, 1)}
              /> */}
              {/* <View style={styles.horizontalline} /> */}
              <Text style={styles.Text}>{searchStrings.diagnosedLable}</Text>
              <Autocomplete
                underlineShow={true}
                style={styles.autocompleteText}
                // containerStyle={styles.autoCompleteContainer1}
                listContainerStyle={styles.autocompleteListContainerStyle}
                listStyle={styles.autocompleteListStyle}
                // placeholder="Enter Customer Name"
                data={
                  data1.length === 1 && comp(conditionQuery, data1[0].name) ? [] : data1
                }
                defaultValue={conditionQuery}
                hideResults={this.state.hideResults}
                inputContainerStyle={styles.autocompleteInputContainer}
                onChangeText={(text) =>
                  this.setState({ conditionQuery: text, hideResults: false })
                }
                renderItem={({ item, i }) => (
                  <TouchableOpacity onPress={() => this.selectConditions(item)}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
              {/* <TextInput
                style={styles.inputBox}
                value={this.state.diagnosedText}
                onChangeText={text => this.onChangeText(text, 2)}
              /> */}
              {/* <View style={styles.horizontalline} /> */}
              <View style={styles.middleView}>
                <View style={styles.MiddleFirstView}>
                  <Text style={styles.Textinputbox}>
                    {searchStrings.durationLable}
                  </Text>
                  <TextInput
                    style={styles.inputBox1}
                    onChangeText={(text) => this.onChangeText(text, 1)}
                  />
                  <Text style={styles.Textinputbox}>
                    {searchStrings.ageLable}
                  </Text>
                  <TextInput
                    style={styles.inputBox1}
                    onChangeText={(text) => this.onChangeText(text, 2)}
                  />
                  <Text style={styles.Textinputbox}>
                    {searchStrings.gender}
                  </Text>
                  <Picker selectedValue={this.state.selectedGender}
                    style={styles.dropDown1}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedGender: itemValue })}
                  >
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker>
                  <View style={styles.dropDownLine1} />
                </View>
                <View style={styles.MiddleSecondView}>
                  <Picker
                    selectedValue={this.state.selectedDurationType}
                    style={styles.dropDown}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedDurationType: itemValue })}
                  >
                    <Picker.Item label="Days" value="Days" />
                    <Picker.Item label="Weeks" value="Weeks" />
                    <Picker.Item label="Months" value="Months" />
                    <Picker.Item label="Years" value="Years" />
                  </Picker>
                  <View style={styles.dropDownLine} />
                  <Picker
                    selectedValue={this.state.selectedAgeType}
                    style={styles.dropDown}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedAgeType: itemValue })}
                  >
                    <Picker.Item label="Years" value="Years" />
                    <Picker.Item label="Months" value="Months" />
                    <Picker.Item label="Days" value="Days" />
                  </Picker>
                  <View style={styles.dropDownLine} />
                </View>
              </View>
              <TouchableOpacity style={styles.Button} onPress={() => this.onSearchButton()}>
                <Text style={styles.ButtonText}>{searchStrings.searchBtn}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(searchStrings.privacyUrl)} style={styles.BottomView}>
                <Text style={styles.BottomText}>{searchStrings.termsTitle}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
