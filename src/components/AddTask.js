import React, { useState } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function AddTask({ onAddTask }) {

  const [task, setTask] = useState('');

  const handleAdd = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Adicione algo a sua lista"
        placeholderTextColor="#777"
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: -48,
    paddingHorizontal: 50,
    gap: 8,
  },

  input: {
    flex: 1,
    height: 84,
    backgroundColor: '#292929',
    borderRadius: 8,
    paddingHorizontal: 24,
    fontSize: 24,
    color: '#FFF',
    borderWidth: 1,
    borderColor: '#111',
  },

  button: {
    width: 82,
    height: 84,
    borderRadius: 8,
    backgroundColor: '#0785BD',
    justifyContent: 'center',
    alignItems: 'center',
  },

  plus: {
    color: '#FFF',
    fontSize: 38,
    fontWeight: '300',
  },
});