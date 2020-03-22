
import React from 'react';
import { StyleSheet, Text, View , Image  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = ({ navigation}) => {
    return(
        <View style={styles.container}>
          <Image style={{width:300 , height:300}} source={require('../assets/splashLogo.png')}></Image>
          <TouchableOpacity    onPress={() => {navigation.navigate('ResidentReg')}} >
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                  Let's Get Going
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#a2beaa',
      borderRadius:11,
      position:'relative',
      width: 318,
      height: 66,
      
      
    },
    buttonText: {
      fontFamily:'Rosario',
      fontWeight:'bold',
      fontStyle:'normal',
      textAlign:'center',
      fontSize:24,
      lineHeight:29,
      position:'relative',
      top:10
    }
  });
  