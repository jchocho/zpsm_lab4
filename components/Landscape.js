import {useState} from 'react';
import calculator from '../util/calculator';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import Row from './Row';
import ButtonLandscape from './ButtonLandscape';

const Landscape = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Text style={styles.value}>
          {parseFloat(props.currentValue).toLocaleString()}
        </Text>
        <Row>
          <ButtonLandscape
            text="sqrt"
            theme="secondary"
            onPress={() => props.handleTap('operator', 'sqrt')}
          />
          <ButtonLandscape
            text="x!"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonLandscape
            text="AC"
            theme="secondary"
            onPress={() => props.handleTap('clear')}
          />
          <ButtonLandscape
            text="+/-"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonLandscape
            text="%"
            theme="secondary"
            onPress={() => props.handleTap('percentage')}
          />
          <ButtonLandscape
            text="÷"
            theme="accent"
            onPress={() => props.handleTap('operator', '/')}
          />
        </Row>

        <Row>
          <ButtonLandscape
            text="eˣ"
            theme="secondary"
            onPress={() => props.handleTap('clear')}
          />
          <ButtonLandscape
            text="10ˣ"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonLandscape
            text="7"
            onPress={() => props.handleTap('number', 7)}
          />
          <ButtonLandscape
            text="8"
            onPress={() => props.handleTap('number', 8)}
          />
          <ButtonLandscape
            text="9"
            onPress={() => props.handleTap('number', 9)}
          />
          <ButtonLandscape
            text="×"
            theme="accent"
            onPress={() => props.handleTap('operator', '*')}
          />
        </Row>

        <Row>
          <ButtonLandscape
            text="ln"
            theme="secondary"
            onPress={() => props.handleTap('clear')}
          />
          <ButtonLandscape
            text="log10"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonLandscape
            text="4"
            onPress={() => props.handleTap('number', 4)}
          />
          <ButtonLandscape
            text="5"
            onPress={() => props.handleTap('number', 5)}
          />
          <ButtonLandscape
            text="6"
            onPress={() => props.handleTap('number', 6)}
          />
          <ButtonLandscape
            text="−"
            theme="accent"
            onPress={() => props.handleTap('operator', '-')}
          />
        </Row>

        <Row>
          <ButtonLandscape
            text="e"
            theme="secondary"
            onPress={() => props.handleTap('clear')}
          />
          <ButtonLandscape
            text="x^2"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonLandscape
            text="1"
            onPress={() => props.handleTap('number', 1)}
          />
          <ButtonLandscape
            text="2"
            onPress={() => props.handleTap('number', 2)}
          />
          <ButtonLandscape
            text="3"
            onPress={() => props.handleTap('number', 3)}
          />
          <ButtonLandscape
            text="+"
            theme="accent"
            onPress={() => props.handleTap('operator', '+')}
          />
        </Row>

        <Row>
          <ButtonLandscape
            text="π"
            theme="secondary"
            onPress={() => props.handleTap('clear')}
          />
          <ButtonLandscape
            text="x^3"
            theme="secondary"
            onPress={() => props.handleTap('posneg')}
          />
          <ButtonLandscape
            text="0"
            size="double"
            onPress={() => props.handleTap('number', 0)}
          />
          <ButtonLandscape
            text=","
            onPress={() => props.handleTap('number', '.')}
          />
          <ButtonLandscape
            text="="
            theme="accent"
            onPress={() => props.handleTap('equal')}
          />
        </Row>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535555',
    justifyContent: 'flex-end',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 60,
    textAlign: 'right',
    marginRight: 40,
    marginBottom: 5,
  },
});

export default Landscape;