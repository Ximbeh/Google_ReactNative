import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.Camera} source={require('./assets/img/CameraGoogle.png')} />
      <Image style={styles.Pontos} source={require('./assets/img/3PontosGoogle.png')} />

      <Image style={styles.logo} source={require('./assets/img/Google.png')} />

      <TextInput 
       style={[styles.input]}
       placeholder="Search or type URL"
       placeholderTextColor="#CCCCCC"
       keyboardType="input1"/>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Camera: {
    width: 31,
    height: 28,
    position: 'absolute',
    top: 45,
    right: 60,
  },

  Pontos: {
    width: 5,
    height: 19,
    position: 'absolute',
    top: 50,
    right: 30,
  },

  logo:{
    width: 225,
    height: 75,
  },

  input: {
    marginTop: 70,
    width: '85%',
    padding: 12,
    borderWidth: 2,
    borderColor: '#F8F8F8',
    borderRadius: 3,
    fontSize: 15,
    paddingVertical: 14,
},


});
