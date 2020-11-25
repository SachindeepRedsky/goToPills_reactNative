//This is an example code for Navigator//
import React, {Component} from 'react';
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
import {searchStrings} from '../../constants/title';
import styles from './styles';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainHeader navigate={this.props.navigation} title={'Search'} />
        <ScrollView>
            <Text style={styles.textstyle}>{searchStrings.approvedTitle}</Text>
          <View style={{margin:'2%'}}>
            <View style={styles.inputView}>
              <Text style={styles.Text}>{searchStrings.prescribedLable}</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => onChangeText(text)}
              />
              <View style={styles.horizontalline} />
              <Text style={styles.Text}>{searchStrings.diagnosedLable}</Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => onChangeText(text)}
              />
              <View style={styles.horizontalline} />
              <View style={styles.middleView}>
                <View style={styles.MiddleFirstView}>
                  <Text style={styles.Textinputbox}>
                    {searchStrings.durationLable}
                  </Text>
                  <TextInput
                    style={styles.inputBox1}
                    onChangeText={(text) => onChangeText(text)}
                  />
                  <Text style={styles.Textinputbox}>
                    {searchStrings.ageLable}
                  </Text>
                  <TextInput
                    style={styles.inputBox1}
                    onChangeText={(text) => onChangeText(text)}
                  />
                  <Text style={styles.Textinputbox}>
                    {searchStrings.gender}
                  </Text>
                  <Picker style={styles.dropDown}>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                  </Picker>
                  <View style={styles.dropDownLine1} />
                </View>
                <View style={styles.MiddleSecondView}>
                  <Picker
                    //selectedValue={selectedValue}
                    style={styles.dropDown}
                    //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Days" />
                    <Picker.Item label="Sunday" value="Sunday" />
                    <Picker.Item label="Monday" value="monday" />
                  </Picker>
                  <View style={styles.dropDownLine} />
                  <Picker
                    //selectedValue={selectedValue}
                    style={styles.dropDown}
                    //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item label="Years" />
                  </Picker>
                  <View style={styles.dropDownLine} />
                </View>
              </View>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.Button}>
                <Text style={styles.ButtonText}>{searchStrings.searchBtn}</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => Linking.openURL(searchStrings.privacyUrl)} style={styles.BottomView}>
              <Text style={styles.BottomText}>{searchStrings.termsTitle}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
