import {  useDrawerStatus } from "@react-navigation/drawer";
import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function DrawerSceneWrapper({ children }: { children: React.ReactNode }) {
  const isDrawerOpen = useDrawerStatus() === 'open';

  const sv = useSharedValue(0);

  useLayoutEffect(() => {
    if (isDrawerOpen) {
      sv.value = (withTiming(1, { duration: 250 }));
    } else {
      sv.value = (withTiming(0, { duration: 250 }));
    }
  }, [isDrawerOpen])

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(sv.value, [0, 1], [0, 60], Extrapolation.CLAMP),
        },
      ],
    }
  });

  const contentAnimatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(sv.value, [0, 1], [0, -15], Extrapolation.CLAMP);
    return {
      transform: [
        {
          translateY: interpolate(sv.value, [0, 1], [0, 50], Extrapolation.CLAMP),
        },
        {
          translateX: interpolate(sv.value, [0, 1], [0, 105], Extrapolation.CLAMP),
        },
        {
          rotateZ: `${rotateZ}deg`,
        }
      ],
      borderRadius: interpolate(sv.value, [0, 1], [0, 32], Extrapolation.CLAMP),
    }
  });

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <Animated.View style={[styles.contentContainer, contentAnimatedStyle]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b162b',
    flex: 1.
  },
  contentContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});