import React, { Component } from 'react';
import { Button, View,Text } from 'react-native';
import {Audio} from 'expo-av'



export class Thor extends Component{
  displayAlert(){
    alert('Thor')
   
  }
  render(){
    return(
         <Button title="Thor" color="grey" onPress={this.displayAlert}/>
    )
  }
}
class CaptianAmericaSound extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <Button title="ThorHammerSound" color="grey" onPress={this.playSound} />
    );
  }
}
export class CaptianAmerica extends Component{
  displayAlert(){
    alert('CaptianAmerica')
  }
  render(){
    return(
       <Button title="CaptianAmerica" color="blue" onPress={this.displayAlert}/>
    )
  }
}
export class Hulk extends Component{
  displayAlert(){
    alert('Hulk')
  }
  render(){
    return(
     <Button title="Hulk" color="green" onPress={this.displayAlert}/>
    )
  }
}
export class Superwomen extends Component{
  displayAlert(){
    alert('Superwomen')
  }
  render(){
    return(
       <Button title="superwomen" color="red" onPress={this.displayAlert}/>
    )
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 200, width: "100"}}>
        <Thor/>
        <CaptianAmerica/>
        <Hulk/>
        <Superwomen/>
        <Text>My favourite avengers</Text>
      </View>
    );
  }
}