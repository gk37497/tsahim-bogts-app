import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const img1 = require('../assets/back1.jpg');
const img2 = require('../assets/back2.jpg');
const img3 = require('../assets/back3.jpg');
const img4 = require('../assets/back4.jpg');
const img5 = require('../assets/back5.jpg');
const img6 = require('../assets/back6.jpg');

const images = {
  About: img1,
  Farming: img2,
  Health: img3,
  Management: img4,
  Structure: img5,
  Gallery: img6,
};

const routes = [
  {
    title: 'Бидний тухай',
    url: 'About',
  },
  {
    title: 'Мал маллагаа',
    url: 'Farming',
  },
  {
    title: 'Малын эрүүл мэнд',
    url: 'Health',
  },
  {
    title: 'Бэлчээрийн  менежмент',
    url: 'Management',
  },
  {
    title: 'Сүргийн бүтэц',
    url: 'Structure',
  },
  {
    title: 'Каталоги',
    url: 'Gallery',
  },
];

export default function HomeScreen({ navigation, route }) {
  const onCardPress = (url) => {
    navigation.navigate(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerStyle}>
      {routes.map((route, index) => (
        <ImageBackground
          key={index}
          source={images[route.url]}
          esizeMode="cover"
          style={styles.card}>
          <TouchableOpacity
            onPress={() => onCardPress(route.url)}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.65)',
              borderRadius: 5,
            }}>
            <Text style={styles.title}>{route.title}</Text>
          </TouchableOpacity>
        </ImageBackground>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    height: 120,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    paddingHorizontal: 10,
    paddingVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
