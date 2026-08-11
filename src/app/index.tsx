import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MusicPlayer() {

  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  // const spinValue = useRef(new Animated.Value(0)).current;
  // const [isFavorited, setIsFavorited] = useState<boolean>(false);
  // const { favoriteTracks, setFavoriteTracks } = useContext(FavoriteTracksContext);


  // const setUpTrackPlayer = async () => {
  //   await TrackPlayer.setupPlayer();
  //   await TrackPlayer.add(tracks);
  // };
  // useEffect(() => {
  //   if (currentTrack && Array.isArray(favoriteTracks)) {
  //     setIsFavorited(favoriteTracks.includes(currentTrack.id));
  //   }
  // }, [favoriteTracks, currentTrack]);

  // useEffect(() => {
  //   const initializePlayer = async () => {
  //     await setUpTrackPlayer();
  //     startRotation();
  //   };

  //   initializePlayer();
  // }, []);

  // useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
  //   if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
  //     const track = await TrackPlayer.getTrack(event.nextTrack);
  //     setCurrentTrack(track as Track);
  //   }
  // });

  // // dừng phát nhạc khi bấm pause/play
  // const togglePlayPause = async () => {
  //   const currentState = await TrackPlayer.getState();
  //   if (currentState === State.Playing) {
  //     await TrackPlayer.pause();
  //     setIsPlaying(false);
  //   } else {
  //     await TrackPlayer.play();
  //     setIsPlaying(true);
  //   }
  // };

  // // rotate ảnh bìa khi phát nhạc
  // const startRotation = () => {
  //   Animated.loop(
  //     Animated.timing(spinValue, {
  //       toValue: 1,
  //       duration: 25000,
  //       easing: Easing.linear,
  //       useNativeDriver: false,
  //     })
  //   ).start();
  // };

  // const spin = spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg'],
  // });

  // // Hàm chuyển đổi thời gian từ giây sang định dạng "hh:mm:ss"
  // function secondsToMMSS(seconds: number): string {
  //   const minutes = Math.floor((seconds % 3600) / 60);
  //   const remainingSeconds = Math.floor(seconds % 60);

  //   const formattedMinutes = String(minutes).padStart(2, '0');
  //   const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  //   return `${formattedMinutes}:${formattedSeconds}`;
  // }

  // const time = useProgress();
  // const time1 = roundNumber(time.position);
  // const time2 = roundNumber(time.duration);

  // function roundNumber(number: number): number {
  //   return number % 1 < 0.5 ? Math.floor(number) : Math.ceil(number);
  // }

  // const thoigianbatdau = secondsToMMSS(time1);
  // const thoigianketthuc = secondsToMMSS(time2);

  // const handleToggleFavorite = () => {
  //   if (!currentTrack) return;

  //   if (isFavorited) {
  //     // Nếu bài hát đã được yêu thích, xóa khỏi danh sách
  //     setFavoriteTracks(favoriteTracks.filter(trackId => trackId !== currentTrack.id));
  //   } else {
  //     // Nếu bài hát chưa được yêu thích, thêm vào danh sách
  //     setFavoriteTracks([...favoriteTracks, currentTrack.id]);
  //   }
  //   setIsFavorited(!isFavorited);
  // };

  return (
    <View style={styles.container}>
      {/* Ảnh bìa bài hát */}
      <Image style={styles.albumArt} source={require('@/assets/images/icon.png')} />

      {/* Thông tin bài hát */}
      <View style={styles.barthongtinbaihat}>
        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('@/assets/images/share.png')}
          />
        </TouchableOpacity>

        <View style={styles.thongtinbaihat}>
          <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
            Title
          </Text>
          <Text style={{ fontSize: 15, color: 'black' }}>Artist</Text>
        </View>

        <TouchableOpacity>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('@/assets/images/heart.png')}
          />
        </TouchableOpacity>
      </View>

      {/* Khung hiển thị thời gian */}
      <View style={styles.khungthoigian}>
        <View style={styles.thanhthoigian}>
          <View style={[styles.thanhthoigianTrang, { width: '30%' }]} />
          <View style={[styles.cucthoigian]} />
          <View style={[styles.thanhthoigianXanh, { width: '70%' }]} />
        </View>

        <View style={styles.thanhthoigian2}>
          <Text style={styles.thoigianbatdau}>00:30</Text>
          <Text style={styles.thoigianketthuc}>01:40</Text>
        </View>
      </View>

      {/* Thanh chức năng */}
      <View style={styles.thanhchucnang}>
        <TouchableOpacity style={{ padding: 20 }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('@/assets/images/previous.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 30 }}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require('@/assets/images/play.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 20 }}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('@/assets/images/next.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(1, 1, 1, 0.2)',
  },

  albumArt: {
    alignItems: 'center',
    margin: 30,
    borderRadius: 200,
    width: 330,
    height: 330,
  },
  barthongtinbaihat: {
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
  },
  thongtinbaihat: {
    alignItems: 'center',
    textAlign: 'center',
  },

  khungthoigian: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },

  thanhthoigian: {
    width: '86%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  thanhthoigianTrang: {
    backgroundColor: 'white',
    height: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cucthoigian: {
    backgroundColor: 'white',
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  thanhthoigianXanh: {
    backgroundColor: 'rgba(128, 128, 128, 0.3)',
    height: 5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  thanhthoigian2: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  thoigianbatdau: {
    fontSize: 14,
  },
  thoigianketthuc: {
    fontSize: 14,
  },
  thanhchucnang: {
    paddingTop: 30,
    paddingBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
