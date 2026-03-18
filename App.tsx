import React, { useEffect, useState, useRef, useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MusicPlayer from './src/components/MusicPlayer';
import TrackList from './src/components/TrackList';
import { FavoriteTracksProvider } from './src/components/FavoriteTracksContext';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <FavoriteTracksProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Music Player') {
                  iconName = focused
                    ? require('./assets/image/home.png')
                    : require('./assets/image/home.png');
                } else if (route.name === 'Danh Sách') {
                  iconName = focused
                    ? require('./assets/image/list.png')
                    : require('./assets/image/list.png');
                }

                return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
              },
              headerShown: false,
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Music Player" component={MusicPlayer} />
            <Tab.Screen name="Danh Sách" component={TrackList} />
          </Tab.Navigator>
        </NavigationContainer>
      </FavoriteTracksProvider>
    </SafeAreaProvider>
  );
};

export default App;
