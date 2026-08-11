import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import TrackPlayer from 'react-native-track-player';
// import tracks from '../tracks';
// import SearchBar from './SearchBar';
// import { useState } from 'react';

interface TrackItem {
  id: string;
  title: string;
  artist: string;
  artwork: any;
}

interface TrackListAllProps {
  navigation: any;
}

// Dữ liệu tĩnh tạm thời để xem UI
const tracks: TrackItem[] = [
  { id: '0', title: 'Song One', artist: 'Artist A', artwork: require('@/assets/images/icon.png') },
  { id: '1', title: 'Song Two', artist: 'Artist B', artwork: require('@/assets/images/icon.png') },
  { id: '2', title: 'Song Three', artist: 'Artist C', artwork: require('@/assets/images/icon.png') },
  { id: '3', title: 'Song Four', artist: 'Artist D', artwork: require('@/assets/images/icon.png') },
  { id: '4', title: 'Song Five', artist: 'Artist E', artwork: require('@/assets/images/icon.png') },
];

export default function TrackList({ navigation }: TrackListAllProps) {
  // const [searchTerm, setSearchTerm] = useState<string>('');

  // const handleSearch = (text: string) => {
  //   setSearchTerm(text);
  // };

  // const filteredTracks = searchTerm
  //   ? tracks.filter((track: TrackItem) =>
  //     track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     track.artist.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   : tracks;

  // const playTrack = async (trackId: string) => {
  //   const parsedTrackId = parseInt(trackId, 10);
  //   // Nhảy đến bài hát được chọn
  //   await TrackPlayer.skip(parsedTrackId);
  //   navigation.navigate('Music Player');
  // };

  const renderItem = ({ item, index }: { item: TrackItem; index: number }) => {
    return (
      <TouchableOpacity style={styles.trackItem} onPress={() => { /* playTrack(item.id) */ }}>
        <Text style={styles.stt}>{index + 1}</Text>
        <Image source={item.artwork} style={styles.artwork} />
        <View style={styles.trackInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={tracks}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  stt: {
    width: '10%',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: 7,
  },
  trackItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  trackInfo: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: 'gray',
  },
});