import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import StatItem from './StatItem';
import Text from './Text';

const styles = StyleSheet.create({
  column: {
    display: 'flex',
    padding: 10,
    backgroundColor: 'white',
    flexShrink: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  statRow: {
    justifyContent: 'space-evenly',
  },
  tagContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    flexBasis: 'auto',
    color: 'white',
    padding: 5,
    paddingTop: 3,
    marginTop: 5,
  },
});

const RepositoryItem = ({ repository }) => (
  <View style={styles.column}>
    <View style={styles.row}>
      <View style={styles.column}>
        <Image 
          style={styles.image}
          source={{
            uri: repository.ownerAvatarUrl
          }}
        />
      </View>
      <View style={styles.column}>
        <Text fontWeight="bold">{repository.fullName}</Text>
        <Text>{repository.description}</Text>
        <View style={styles.row}>
          <View style={styles.tagContainer}>
            <Text style={{ color: 'white' }}>{repository.language}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={{ ...styles.row, ...styles.statRow }}>
      <StatItem stat={repository.stargazersCount} title="Stars" />
      <StatItem stat={repository.forksCount} title="Forks" />
      <StatItem stat={repository.reviewCount} title="Reviews" />
      <StatItem stat={repository.ratingAverage} title="Rating" />
    </View>
  </View>
);

export default RepositoryItem;