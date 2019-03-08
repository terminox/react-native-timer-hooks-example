import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

function AppScreen() {
  const [isOn, setIsOn] = useState(false)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let interval

    if (isOn) {
      interval = setInterval(
        () => setTimer(timer + 1),
        100
      )
    }
    
    return () => clearInterval(interval)
  }, [isOn, timer])
  
  const _onStart = () => {
    setIsOn(true)
  }

  const _onStop = () => {
    setIsOn(false)
  }

  const _onReset = () => {
    setIsOn(false)
    setTimer(0)
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{timer}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={_onStart}
        >
          <Text style={styles.buttonTitle}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={_onStop}
        >
          <Text style={styles.buttonTitle}>Stop</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={_onReset}
        >
          <Text style={styles.buttonTitle}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

class App extends Component {
  render() {
    return (
      <AppScreen />
    )
  }
}

export default App

// MARK: - Styles
const styles = StyleSheet.create({
  screenContainer: { 
    flex: 1, 
    backgroundColor: 'black'
  },

  timerContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonContainer: {
    flex: 0.5,
    alignItems: 'center'
  },

  timer: {
    color: 'white',
    fontSize: 60,
  },

  button: {
    marginVertical: 10
  },

  buttonTitle: {
    color: 'white',
    fontSize: 24
  }
})