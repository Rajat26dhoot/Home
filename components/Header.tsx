import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MagnifyingGlass,CalendarBlank,Question} from 'phosphor-react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>WingsFly</Text>
      </View>
      <View style={styles.rightSection}>
        <MagnifyingGlass size={22} color="#000" weight="bold" style={styles.icon} />
        <CalendarBlank size={22} color="#000" weight="bold" style={styles.icon} />
        <Question size={22} color="#000" weight="bold" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  rightSection: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
});
