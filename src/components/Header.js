import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.icon}>☰</Text>

        <Text style={styles.check}>✓</Text>

        <Text style={styles.logo}>
          MyList
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: '#191919',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    color: '#00C6D7',
    fontSize: 34,
    fontWeight: 'bold',
  },

  check: {
    color: '#00A8E8',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: -5,
    marginRight: 8,
  },

  logo: {
    color: '#00C6D7',
    fontSize: 38,
    fontWeight: 'bold',
  },
});