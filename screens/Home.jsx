import { StyleSheet, Text, View , ActivityIndicator, FlatList, Alert, RefreshControl, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ColorPost } from '../src/ColorPost';

export const Home = () => {
  const API = 'https://64a68b56096b3f0fcc7fffe2.mockapi.io/Example'

  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API)
      .then(({data}) => {
        setDate(data)
        setLoading(false)
      })
      .catch(error => Alert.alert(`Problem with API ${error}`))
    }, [])

  return (
    <View >
      <View style={styles.container}> 
        <Text>Welcom to my first app with React Native</Text>
      </View>

      <View style={styles.content}>
        {loading ? <ActivityIndicator size="large"/>  :
          <FlatList
            refreshControl={<RefreshControl refreshing={loading} />}
            data={[...date, ...date]}
            renderItem={({item}) => <TouchableOpacity >
              <ColorPost name={item.color} color={item.value}></ColorPost>
            </TouchableOpacity>}
          />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingTop: 30,
  }
}); 
