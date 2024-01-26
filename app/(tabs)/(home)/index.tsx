import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const navigation = useNavigation();
  const { openDrawer } = navigation;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openDrawer}>
          <Ionicons name="menu-outline" size={32} color="grey" />
        </TouchableOpacity>
        <Text style={styles.title}>START</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>First Screen of the Stack Navigator</Text>
        <Link href="/screen2" asChild>
          <Pressable>
            <Text style={styles.link}>Go to screen 2</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    color: 'grey',
    marginLeft: 15,
  },
  contentContainer: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingTop: 10,
    textDecorationLine: 'underline',
  }
});
