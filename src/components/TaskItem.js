import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function TaskItem({
  task,
  onToggle,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
    >

      <View
        style={[
          styles.checkbox,
          task.completed && styles.checkboxCompleted,
        ]}
      >
        {task.completed && (
          <Text style={styles.check}>
            ✓
          </Text>
        )}
      </View>

      <Text
        style={[
          styles.title,
          task.completed && styles.titleCompleted,
        ]}
      >
        {task.title}
      </Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
    paddingVertical: 12,
  },

  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#00C6D7',
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxCompleted: {
    backgroundColor: '#00C6D7',
  },

  check: {
    color: '#080808',
    fontWeight: 'bold',
  },

  title: {
    color: '#FFF',
    fontSize: 17,
    flex: 1,
  },

  titleCompleted: {
    color: '#777',
    textDecorationLine: 'line-through',
  },
});