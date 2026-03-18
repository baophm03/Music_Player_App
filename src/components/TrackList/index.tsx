import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TrackFavorite from '../TrackFavorite';
import TrackListAll from '../TrackListAll';

const Tab = createMaterialTopTabNavigator();

function TrackList() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tìm Kiếm" component={TrackListAll} />
      <Tab.Screen name="Yêu Thích" component={TrackFavorite} />
    </Tab.Navigator>
  );
}

export default TrackList;
