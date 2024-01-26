import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../components/CustomDrawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent} screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: 'transparent',
        drawerActiveBackgroundColor: '#3f2b2f',
        drawerActiveTintColor: '#c46062',
        drawerStyle: {
          width: '45%',
        },
        drawerItemStyle: {
          borderRadius: 16,
          marginHorizontal: 20,
          paddingHorizontal: 16,
          justifyContent: 'center',
          height: 50,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        sceneContainerStyle: {
          backgroundColor: 'white',
        },
        swipeEnabled: false,
      }}>
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Start',
            title: 'Start',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}