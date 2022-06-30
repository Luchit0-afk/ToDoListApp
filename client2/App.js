import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FormNewTask } from './components/task/FormNewTask.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>To Do List App!</Text>
      <FormNewTask/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
