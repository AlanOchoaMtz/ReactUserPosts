import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../components/ListItems'

export default ({ navigation }) => {
  const userId = navigation.getParam('user_id')
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
//  console.log(userId)

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    setPosts(data)
    setLoading(false)
  }
  useEffect( () => {
    fetchPosts()
  }, [])


  return (
    <View style={styles.container}>
      {loading ? <Text>Cargando...</Text> :
      <FlatList
	style={styles.list}
	data={posts.filter(x => x.userId === userId)}
	keyExtractor={x => String(x.id)}
	renderItem={({ item }) => <ListItem onPress={() => navigation.navigate('Detail', { post_id: item.id })} title={item.title} />}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  }
});
