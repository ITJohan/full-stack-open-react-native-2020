import React from 'react';
import { StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  tab: {
    color: 'white',
    padding: 10,
  }
});

const AppBarTab = ({ text }) => {
  return (
    <Text
      fontWeight="bold"
      fontSize="subheading"
      style={styles.tab}
    >
      {text}
    </Text>
  )
};

export default AppBarTab;