> 본 예제는 Typescript template 으로 작성됨.

<br/>

<br/>

### 실행 방법

1. `yarn` 명령어를 통해 dependency 설치
2. `cd ios`로 이동후 `pod install` 설치
3. `yarn ios` 또는 `yarn android`

<br/>
<br/>

# 5장, 리액트 네비게이션 적용하여 여러 화면 관리하기

## 새로 알게된 것

- `react-navigation` 과 `react-native-navigation` 두 라이브러리가 있는데, 전자의 라이브러리 사용

  - `react-navigation` : 리액트 네이티브 커뮤니티에서 관리하며, 사용률 높음, 네비게이션 기능이 js로 구현되어 있음
  - `react-native-navigation` Wix에서 관리하며, 기존 네이티브 앱에 리액트 네이티브를 적용할 경우 적합함, 네비게이션기능이 네이티브로 구현되어 있음

  <img src="../capture/differntLibrary.png" width="800">

  <br/>

- 컴포넌트 내부에서 navigation 속성을 사용하려면 `useNavigation` hook을 통해 사용하고 아래 코드와 같이 타입을 제네릭으로 지정

  ```typescript
  //1. 각 stack 별 파라미터 리스트를 작성
  export type RootStackParamList = {
    Home: undefined;
    Detail: {id: number};
  };

  //NativeStackNavigationProps 인터페이스 내 제네릭으로 스택별 파라미터리스트를 넣고 Record로 key 값을 받고 있으니 해당하는 key값 입력
  type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Detail'
  >;

  // 아래와 같이 선언하여 사용
  const navigate = useNavigation<ProfileScreenNavigationProp>();
  ```

- 컴포넌트 내부에서 route 속성도 마찬가지로 `useRoute` hook을 통해 사용하고 아래 코드와 같이 타입을 제네릭으로 지정

  ```typescript
  //1. 각 stack 별 파라미터 리스트를 RouteProp 인터페이스 내부에 입력하고 key값도 함께 입력
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  ```

  - 아래와 같이 컴포넌트 내부에서 route 객체 내부 params 값을 사용

  ```typescript
  import {View, Text, Button} from 'react-native';
  import React from 'react';
  import {NativeStackNavigationProp} from '@react-navigation/native-stack';
  import {RootStackParamList} from '../App';
  import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

  type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Detail'
  >;

  const DetailScreen = () => {
    const navigate = useNavigation<ProfileScreenNavigationProp>();
    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();

    return (
      <View>
        <Text>DetailScreen</Text>
        <Text>id : {route.params.id}</Text>
        <Button title="뒤로가기 " onPress={() => navigate.goBack()} />
      </View>
    );
  };

  export default DetailScreen;
  ```

## 느낀 점
