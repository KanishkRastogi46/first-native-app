import { 
  StyleSheet, 
  Text, 
  // SafeAreaView, 
  ScrollView,
  View,
  Image, 
  Pressable, 
  // Button, 
  // TouchableOpacity, 
  useColorScheme 
} from 'react-native'
import React from 'react'

const App = () => {
  let theme = useColorScheme();
  let bgColor = (theme === 'dark') ? '#000' : '#fff';
  let textColor = (theme === 'dark') ? '#fff' : '#000';
  let boxNum = [1, 2, 3, 4, 5];

  return (
    <ScrollView 
      contentContainerStyle={[styles.container, {backgroundColor: bgColor, alignItems: 'center', gap: 20}]} 
      horizontal={false}
    >
      <View>
        <Text style={[styles.text, {color: textColor}]}>Hello, I'm Kanishk Rastogi and I'm learning React Native!!</Text>
      </View>
      
      <Image 
        style={styles.image}
        source={{uri:"https://avatars.githubusercontent.com/u/113916868?v=4"}} 
      />

      {/* 
      <Button title='Button' onPress={()=>alert("Button hu mai!")} />

      <TouchableOpacity 
        style={styles.button}
        onPress={() =>  alert('Touchable hu mai!')}>
        <Text style={styles.button}>TouchableOpacity</Text>
      </TouchableOpacity> 
      */}

      <View>
        <Pressable 
          style={styles.button}
          onPress={() => alert('Pressable hu mai!')}>
          <Text style={styles.text}>Alert</Text>
        </Pressable>
      </View>
      
      {
        boxNum.map((num) => {
          return <View key={num} style={[styles.box, {backgroundColor: (num%2 === 0) ? 'green' : 'red'}]} />
        })
      }
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        gap: 20,
    },
    image:{
        width: "100%",
        height: 200,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button:{
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 5,
        width: "40%",
        alignSelf: 'center',
    },
    box:{
        width: 100,
        height: 100,
        backgroundColor: 'red',
    }
});
