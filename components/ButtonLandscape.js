import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 6;
const buttonHeight = screen.height / 7;

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 30,
  },
  button: {
    backgroundColor: '#7C7D7E',
    flex: 1,
    height: Math.floor(buttonHeight),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  buttonDouble: {
    width: buttonWidth * 2 - 2,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 50,
  },
  buttonSecondary: {
    backgroundColor: '#646466',
  },
  buttonAccent: {
    backgroundColor: '#F1A33C',
  },
});
export default ({onPress, text, size, theme}) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};