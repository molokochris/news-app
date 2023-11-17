import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function Onboarding({navigation}) {
  return (
    <View>
      <Text>Onboarding</Text>
      <Button title='next' onPress={() => navigation.navigate("Login")}/>
    </View>
  )
}