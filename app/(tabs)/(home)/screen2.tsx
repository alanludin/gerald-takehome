import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Screen2() {
  return (
    <View style={styles.container}>
        <Text>Second Screen of the Stack Navigator</Text>
        <Link href="../" asChild>
          <Pressable>
            <Text style={styles.link}>Go to screen 1</Text>
          </Pressable>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    paddingTop: 10,
    textDecorationLine: 'underline',
  }
});