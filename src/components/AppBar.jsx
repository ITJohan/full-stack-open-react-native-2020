import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.appBar,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab text="Repositories" />
        </Link>
        <Link to="/signin">  
          <AppBarTab text="Sign in" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;