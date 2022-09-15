import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import LoginEntrevistador from './components/screens/loginEntrevistador';
import { globalStyles } from './global';
import SForm from './components/screens/SForm';
import MainScreen from './components/screens/MainScreen';
import { context } from './global';

function tryToGetFormsFromApi() {


}


// getFormsFromAPI();
// let gotFormsFromAPI = false;
// function getFormsFromAPI() {
//   console.log('TRYING TO GET FORMS FROM API');

//   fetch(context.domain + '/forms').then(function (response) {
//     return response.json(); // This returns a promise!
//   }).then(function (resp) {
//     context.forms = resp.forms // The actual JSON response
//     context.formsBackup = [...context.forms];
//     gotFormsFromAPI = true;
//     console.log('GOT FORMS FROM API: ', context.forms);
//   }).catch(function (err) {
//     console.log('ERROR> ', context.domain + '/forms');
//     context.forms = context.mockBD.forms
//     console.log('GOT FORMS FROM CODE: ', context.forms);
//   });
//   //https://apipesq.tyrcaesar.repl.co/forms

// }





export default function App() {


  return (
    <View style={[globalStyles.container, { backgroundColor: globalStyles.bg }]}>
      <MainScreen />

      <StatusBar style="auto" />
    </View>
  );
}
