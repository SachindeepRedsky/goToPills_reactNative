import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  MainBox:{
   flex:1
  },
   
   menuicon:{
     width:15,
     height:15,
     marginLeft:10,
   },
   Item: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop:15 
 },
 Item1: {
  flexDirection: 'row',
  alignItems: 'flex-start', 
},
 datatext:{
   fontSize:16,
   fontWeight:'bold',
   color:'black',
   lineHeight:25
 },
 titleText:{
   marginLeft:'1%',
  fontSize:14,
  paddingTop:1 ,
  lineHeight:25
 },
 titleText1:{
   paddingTop:5
 },
 datatext1:{
  fontSize:14 ,
  fontWeight:'bold',
  color:'black',
  paddingTop:10
},

});
export default styles;