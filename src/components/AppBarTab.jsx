import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    padding: 10,
  }
});

const AppBarTab = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.tab}>
        <Text
          fontWeight="bold"
          fontSize="subheading"
          style={{ color: 'white' }}
        >
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default AppBarTab;