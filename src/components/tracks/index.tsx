interface Track {
  id: string;
  url: any;
  title: string;
  artist: string;
  artwork: any;
}

const tracks: Track[] = [
  {
    id: '0',
    url: require('../../../assets/music/noitinhyeubatdau/noitinhyeubatdau.mp3'),
    title: 'Nơi tình yêu bắt đầu',
    artist: 'Bùi Anh Tuấn',
    artwork: require('../../../assets/music/noitinhyeubatdau/noitinhyeubatdau.jpg'),
  },
  {
    id: '1',
    url: require('../../../assets/music/divenha/divenha.mp3'),
    title: 'Đi về nhà',
    artist: 'Đen x Justatee',
    artwork: require('../../../assets/music/divenha/divenha.jpg'),
  },
  {
    id: '2',
    url: require('../../../assets/music/tudo/tudo.mp3'),
    title: 'Từ đó - OST Mắt Biếc',
    artist: 'Phan Mạnh Quỳnh',
    artwork: require('../../../assets/music/tudo/tudo.jpg'),
  },
  {
    id: '3',
    url: require('../../../assets/music/cochangtraivietlencay/cochangtraivietlencay.mp3'),
    title: 'Có chàng trai viết lên cây',
    artist: 'Phan Mạnh Quỳnh',
    artwork: require('../../../assets/music/cochangtraivietlencay/cochangtraivietlencay.jpg'),
  },
  {
    id: '4',
    url: require('../../../assets/music/phocuconanh/phocuconanh.mp3'),
    title: 'Phố cũ còn anh',
    artist: 'Quinn Ft. Chilly',
    artwork: require('../../../assets/music/phocuconanh/phocuconanh.jpg'),
  },
  {
    id: '5',
    url: require('../../../assets/music/3107/3107.mp3'),
    title: '3107',
    artist: 'W/N ft. Nâu, Duongg',
    artwork: require('../../../assets/music/3107/3107.jpg'),
  },
  {
    id: '6',
    url: require('../../../assets/music/3107-2/3107-2.mp3'),
    title: '3107-2',
    artist: 'W/N ft. Nâu, Duongg',
    artwork: require('../../../assets/music/3107-2/3107-2.jpg'),
  },
  {
    id: '7',
    url: require('../../../assets/music/3107-3/3107-3.mp3'),
    title: '3107-3',
    artist: 'W/N ft. 267, Nâu, Duongg',
    artwork: require('../../../assets/music/3107-3/3107-3.jpg'),
  },
  {
    id: '8',
    url: require('../../../assets/music/31077/31077.mp3'),
    title: '31077',
    artist: 'W/N ft. 267, Nâu, Duongg',
    artwork: require('../../../assets/music/31077/31077.jpg'),
  },
  {
    id: '9',
    url: require('../../../assets/music/loinho/loinho.mp3'),
    title: 'Lối nhỏ',
    artist: 'Đen ft. Phương Anh Đào',
    artwork: require('../../../assets/music/loinho/loinho.jpg'),
  }
];

export default tracks;
