import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TabBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'shopping-cart' | 'person'>('home');

  const tabs = [
    { name: 'Home', icon: 'home' as const },
    { name: 'Cart', icon: 'shopping-cart' as const },
    { name: 'Profile', icon: 'person' as const },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tab}
          onPress={() => setActiveTab(tab.icon)}
        >
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={activeTab === tab.icon ? '#000' : '#ccc'}
          />
          <Text style={[styles.tabText, activeTab === tab.icon && styles.activeTabText]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  tab: {
    alignItems: 'center',
    padding: 8,
  },
  tabText: {
    fontSize: 12,
    color: '#ccc',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});


export default TabBar;
