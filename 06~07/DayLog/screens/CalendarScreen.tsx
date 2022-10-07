import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {BottomTabParamList} from '../types/BottomTabParamList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

type BottomTabNavigateTypes = BottomTabNavigationProp<
  BottomTabParamList,
  'Calendar'
>;
type BottomTabRouteTypes = RouteProp<BottomTabParamList, 'Calendar'>;

const CalendarScreen = () => {
  const navigate = useNavigation<BottomTabNavigateTypes>();
  const route = useRoute<BottomTabRouteTypes>();

  const [state, setState] = useState(true);
  const animation = useRef(new Animated.Value(1)).current;

  const INPUT_VALUE1 = 1;
  const INPUT_VALUE2 = 0;

  // useEffect(() => {
  //   Animated.timing(animation, {
  //     toValue: state ? INPUT_VALUE1 : INPUT_VALUE2,
  //     useNativeDriver: true,
  //   }).start();

  //   return () => {};
  // }, [animation, state]);

  function FadeInAndOut() {
    return (
      <View>
        {/* <Animated.View
          style={{
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [INPUT_VALUE2, INPUT_VALUE1],
                  outputRange: [50, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [INPUT_VALUE2, INPUT_VALUE1],
              outputRange: [1, 0],
            }),
            backgroundColor: 'red',
            width: 100,
            height: 100,
          }}
        /> */}
        <Button
          title="Fade"
          onPress={() => {
            setState(!state);
          }}
        />
        {/* <Button
          title="Fade Out"
          onPress={() => {
            Animated.timing(animation, {
              toValue: 1,
              useNativeDriver: true,
            }).start();
          }}
        /> */}
      </View>
    );
  }
  const {block} = styled;
  return (
    <View style={block}>
      <Text>CalendarScreen </Text>
      <FadeInAndOut />
    </View>
  );
};

const styled = StyleSheet.create({block: {}});

export default CalendarScreen;
