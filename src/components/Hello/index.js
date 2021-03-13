import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const Hello = () => {
  return (
    <View style={styles.Box}>
      <Text style={styles.Font}>
        A React Native empty project
      </Text>
    </View>
  );
};
