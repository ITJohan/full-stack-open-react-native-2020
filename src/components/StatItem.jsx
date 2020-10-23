import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    padding: 6,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

const StatItem = ({ stat, title }) => {
  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <Text fontWeight="bold">{stat}</Text>
      </View>
      <View style={styles.row}>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default StatItem;