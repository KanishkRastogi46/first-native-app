import { 
  StyleSheet, 
  Text, 
  // SafeAreaView, 
  ScrollView,
  View,
  Image, 
  // Pressable, 
  Button, 
  // TouchableOpacity, 
  useColorScheme, 
  FlatList,
  TextInput
} from 'react-native'
import React from 'react'
import Card from './components/Card';

const App = () => {
  let theme = useColorScheme();
  let bgColor = (theme === 'dark') ? '#000' : '#fff';
  let textColor = (theme === 'dark') ? '#fff' : '#000';
  let boxNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let items = [
    {id: 1, name: 'Alice', age: 25},
    {id: 2, name: 'Bob', age: 30},
    {id: 3, name: 'Charlie', age: 22},
    {id: 4, name: 'David', age: 28},
    {id: 5, name: 'Eve', age: 35},
    {id: 6, name: 'Frank', age: 27},
    {id: 7, name: 'Grace', age: 24},
    {id: 8, name: 'Hank', age: 32},
    {id: 9, name: 'Ivy', age: 29},
    {id: 10, name: 'Jack', age: 26},
    {id: 11, name: 'Karen', age: 31},
    {id: 12, name: 'Leo', age: 23},
    {id: 13, name: 'Mona', age: 34},
    {id: 14, name: 'Nina', age: 21},
    {id: 15, name: 'Oscar', age: 33},
    {id: 16, name: 'Paul', age: 20},
  ];

  let [name, setName] = React.useState('');
  let [show, setShow] = React.useState(false);

  return (
    <ScrollView 
      contentContainerStyle={[styles.container, {backgroundColor: bgColor, alignItems: 'center', justifyContent: 'center'}]} 
      horizontal={false}
    >

      <ScrollView horizontal={true} contentContainerStyle={{gap: 20}}>
        {
          boxNum.map((num) => {
            return <View key={num} style={[styles.box, {backgroundColor: (num%2 === 0) ? 'white' : 'gray'}]} />
          })
        }
      </ScrollView>

      <View>
        <Text style={[styles.text, {color: textColor}]}>Hello, I'm Kanishk Rastogi and I'm learning React Native!!</Text>
      </View>
      
      <Image 
        style={styles.image}
        source={{uri:"https://avatars.githubusercontent.com/u/113916868?v=4"}} 
      />

      <FlatList
        data={items}
        renderItem={({item})=> <Card name={item.name} age={item.age} />}
        keyExtractor={(item)=> item.id}
        numColumns={3}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        columnWrapperStyle={{gap: 20}}
      />

      <TextInput
        placeholder='Enter your email'
        style={{borderWidth: 2, borderColor: "gray", borderRadius: 10, padding: 10, width: 200, color: "white"}}
        onChangeText={(value)=>{setName(value)}}
        value={name}
      />
      <Button 
        title="Click"
        onPress={()=>{setShow(!show)}}
        numberOfLines={1}
        multiline
      />
      <Text style={{color: "white"}}>{show ? name : ""}</Text>

      {/* 
      <Button title='Button' onPress={()=>alert("Button hu mai!")} />

      <TouchableOpacity 
        style={styles.button}
        onPress={() =>  alert('Touchable hu mai!')}>
        <Text style={styles.button}>TouchableOpacity</Text>
      </TouchableOpacity> 
      */}

      
      {/* <Pressable 
        style={styles.button}
        onPress={() => alert('Pressable hu mai!')}>
        <Text style={styles.text}>Alert</Text>
      </Pressable>

      <Text style={[styles.text, {color: textColor}]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsa placeat, odit repellendus dolores, ipsam reprehenderit eaque facilis laborum mollitia ipsum nostrum consequuntur dicta sed tempore expedita. Consequuntur, animi quae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla architecto, optio totam modi nihil nesciunt error ut consequatur aliquam veniam pariatur officia magnam non maiores incidunt exercitationem, officiis debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate at modi deleniti obcaecati eveniet? Veritatis nemo totam officiis quia quidem sit doloremque? Recusandae consequuntur autem, laudantium ducimus dolorum non.
      </Text> */}
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        // height: "100%",
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
        borderRadius: "50%",
        borderWidth: 4,
        borderColor: "purple",
    },
    cardView: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexGrow: 1,
      flexShrink: 1,
    }
});
