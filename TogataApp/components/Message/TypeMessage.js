import React from 'react';
import { View, TextInput, TouchableOpacity,Text,StyleSheet } from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={400}
      placeholder="Type your message here"
    />
  );
}

const TypeMessage = ({navigation}) => {
  const [value, onChangeText] = React.useState('');
  const onPress=()=>{
    console.log('The message: ',value);
    navigation.goBack();
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={styles.container}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.input}
        
      />
      <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Publish</Text>
        </TouchableOpacity>
    </View>
  );
}

export default TypeMessage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical:20,
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,borderColor: 'gray', 
    borderWidth: 2, 
    borderRadius: 20,
  },
  input:{
    padding: 10, 
    borderColor: 'gray', 
    borderWidth: 2, 
    borderRadius: 20,  
    marginBottom: 20, 
    fontSize: 18
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
