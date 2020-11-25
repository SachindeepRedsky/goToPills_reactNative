import {StyleSheet} from "react-native";
import {spacings} from '../../constants/fonts';
import * as colors from '../../constants/colors';


const styles = StyleSheet.create({
   container:{
                flex:1,
                // alignItems:'center'
   },
   textstyle:{
    fontSize:26,
    fontWeight:'bold',
    color:'#8ea6e6',
    textAlign:'center',
    marginTop:spacings.xxsmall
   },
   menuicon:{
     width:15,
     height:15,
     marginLeft:10
   },
   inputBox:{
      //borderBottomWidth:2,
      width:320,
      height:40,
      marginLeft:20,
     
   },
   horizontalline:{
     marginLeft:13,
     width:310,
     height:1,
     backgroundColor:'#dadada',
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 1,
     },
     shadowOpacity: 0.18,
     shadowRadius: 1.00,
     
     elevation: 1,
        },
        dropDownLine:{
          width:120,
          height:1,
          marginRight:20,
     backgroundColor:'#adadad',
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 1,
     },
     shadowOpacity: 0.18,
     shadowRadius: 1.00,
     
     elevation: 1,
        },
        dropDownLine1:{
          width:140,
          height:1,
     backgroundColor:'#adadad',
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 1,
     },
     shadowOpacity: 0.18,
     shadowRadius: 1.00,
     
     elevation: 1,
        },
   Text:{
          fontSize:16,
          color:colors.headerColor,
          paddingTop:15,
          paddingLeft:15
   },
   Textinputbox:{
     color:'#a0a0a0',
     paddingTop:16
   },
   inputView:{
     //flex:1,
     //justifyContent:'center',
     //marginTop:20,
     alignItems:'stretch'
   },
   middleView:{
                flexDirection:'row',
                //alignItems:'stretch',
                marginTop:20,
                justifyContent:'space-between'
   },
   MiddleFirstView:{
          marginLeft:10,
   },
   MiddleSecondView:{
     alignItems:'flex-end'
   },
   inputBox1:{
        borderBottomWidth:2,
        borderBottomColor:'#dadada',
        width:140,
        height:30
   },
   dropDown:{
     height:50,
     width:150,
     borderWidth:1
   },
   Button:{
     marginTop:25,
      backgroundColor:colors.btnColor,
      width:320,
      height:45,
      borderRadius:8
   },
   ButtonText:{
     //justifyContent:'center',
     //alignItems:'center',
     textAlign:'center',
     fontSize:25,
     fontWeight:'bold',
     color:'#1b5987',
     paddingTop:5
   },
   BottomView:{
       alignItems:'center',
       justifyContent:'center',
       margin:4,
   },
   BottomView1:{
     borderLeftWidth:1,
     borderLeftColor:'#5faafd',
     marginLeft:2,
     alignItems:'center',
     justifyContent:'center'
   },
   buttonView:{
     justifyContent:'center',
     alignItems:'center'
   },
   BottomText:{
     color: colors.headerColor,
     fontSize:12,
     textDecorationLine:'underline',
    //  letterSpacing:1
   }
});
export default styles;