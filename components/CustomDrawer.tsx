import { DrawerContentScrollView, DrawerItemList, DrawerProgressContext } from "@react-navigation/drawer";
import { DrawerContentComponentProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { StyleSheet, Text, View } from "react-native";
import { getDrawerStatusFromState } from '@react-navigation/drawer';
import { useLayoutEffect } from "react";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function CustomDrawerContent(props: DrawerContentComponentProps) {
  const isDrawerOpen = getDrawerStatusFromState(props.navigation.getState()) === 'open';

  const sv = useSharedValue(0);

  useLayoutEffect(() => {
    if (isDrawerOpen) {
      sv.value = (withTiming(1, { duration: 250 }));
    } else {
      sv.value = (withTiming(0, { duration: 250 }));
    }
  }, [isDrawerOpen]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(sv.value, [0, 1], [0, 60], Extrapolation.CLAMP),
        },
      ],
      borderTopLeftRadius: interpolate(sv.value, [0, 1], [0, 32], Extrapolation.CLAMP),
    }
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Beka</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b162b',
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
})