import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ActivityIndicator, FlatList, Alert, RefreshControl, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ColorPost } from './src/ColorPost';
import { Home } from './screens/Home';

export default function App() {
  return <View>
      <Home></Home>
      <StatusBar style="auto" />
    </View>
}
