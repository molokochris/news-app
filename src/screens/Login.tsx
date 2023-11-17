import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

export default function Login({navigation}) {
  return (
    <View>
      <Text>Login</Text>
      <Button title='Next' onPress={() => navigation.navigate("Main")}/>
      <Button title='Signup'  onPress={() => navigation.navigate("Register")} />
    </View>
  )
}