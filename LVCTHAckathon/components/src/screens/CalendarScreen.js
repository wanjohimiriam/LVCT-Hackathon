import { StyleSheet } from 'react-native'
import { View, Text, Alert, Button } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'

const CalendarScreen = () => {
  const handleFitnessCheck = () => {
    Alert.alert("Fitness Check, Log in your fitness activity");
  }
  return (
    <View style={styles.container}>

      <Calendar onPress={(day) => console.log("Selected Day", day)}
      marketDays={{
        "2024-10-17": {marked: true, dotColor:"red"}
      }}
      />
      <Button title= "FitnessCheck" onPress={handleFitnessCheck}/>
    </View>
  )
}

export default CalendarScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10
  }
});