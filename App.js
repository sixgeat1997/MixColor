import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Alert } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      red: 255,
      green: 255,
      blue: 255,
      text: "#ffffff"

    }
  }

  convertSingleCode = (colorCode) => {
    colorCode = parseFloat(colorCode)
    if (colorCode > 255) {
      Alert.alert("In put 0-255")
    }
    else {
      let hexCode = colorCode.toString(16)
      return (hexCode.length == 1) ? ('0' + hexCode) : hexCode;
    }

  }

  handleCalculate = () => {

    let setColor = "#" + this.convertSingleCode(this.state.red) + this.convertSingleCode(this.state.green) +
      this.convertSingleCode(this.state.blue);
    this.setState({
      text: setColor
    })
  }

  render() {

    return (

      <View style={styles.container}>
        <Text style={{fontWeight: "bold",fontSize: 50,}}>COLOR</Text>
        <Text>Red</Text>
        <TextInput
          style={{ height: 50, width: 200, backgroundColor: "red" }}
          placeholder="R"
          keyboardType="numeric"
          onChangeText={red => { this.setState({ red }) }}
        />
        <Text>Green</Text>
        <TextInput
          style={{ height: 50, width: 200, backgroundColor: "green" }}
          placeholder="G"
          keyboardType="numeric"
          onChangeText={green => { this.setState({ green }) }}
        />
        <Text>Blue</Text>
        <TextInput
          style={{ height: 50, width: 200, backgroundColor: "blue" }}
          placeholder="B"
          keyboardType="numeric"
          onChangeText={blue => { this.setState({ blue }) }}
        />

        <TouchableOpacity
          onPress={this.handleCalculate}
          style={styles.buttonn}
        >
          <Text > Press </Text>
        </TouchableOpacity>


        <Text style={styles.headerText}>RGB: rgb({this.state.red}, {this.state.green}, {this.state.blue})</Text>
        <Text style={styles.headerText}>HEX: {this.state.text}</Text>
        <Text style={{ backgroundColor: this.state.text, height: 150, width: 150 }}></Text>
      </View>



    );

  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffefd5'
    },
    headerText: {
      fontSize: 30,
      textAlign: "center",
      margin: 10,
      color: 'black',
      fontWeight: "bold"
    },
    setHeaderText: {

      fontSize: 30,
      textAlign: "center",

      color: 'blue',
      fontWeight: "bold"
    },
    buttonn: {
      margin: 20,
      alignSelf: "center",
      padding: 25,
      fontSize: 25,
      color: "#FFCB1F",
      fontWeight: "bold",
      backgroundColor: "#87ceeb"
    }

  });
