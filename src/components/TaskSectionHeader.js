import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function TaskSectionHeader({
  title,
  count,
}) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.badge}>
        <Text style={styles.count}>
          {count}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 15,
  },

  title: {
    color: '#00C6D7',
    fontSize: 23,
    fontWeight: 'bold',
  },

  badge: {
    backgroundColor: '#3A3A3A',
    minWidth: 38,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingHorizontal: 8,
  },

  count: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});