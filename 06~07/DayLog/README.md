> 본 예제는 Typescript template 으로 작성되었고, 6~7장 예시의 내용은 JS로 구현되어있지만 TS로 적용하며 스터디 진행
> 그래서 다른 장(12장)에 타입스크립트 적용하기 내용과 중복될 수 있음

<br/>

<br/>

### 실행 방법

1. `yarn` 명령어를 통해 dependency 설치
2. `cd ios`로 이동후 `pod install` 설치
3. `yarn ios` 또는 `yarn android`

<br/>
<br/>

# 6장 ~ 7장, 다이어리 앱 만들기

## 새로 알게된 것

- 주로 예제에 버튼 대용으로 많이 쓰인 `<Pressable/>` 컴포넌트에 대해서 새로 접하게 되었다.
- `uuid` 라는 라이브러리에 대해서 경험하였고, 토이프로젝트나 또는 프론트 단에서 임시로 유니크한 id를 관리할 때에 좋다고 느꼈다.
- Animated 객체의 사용

  - 간략한 예제

  ```jsx
  const Sample () => {
      const animation = useRef(new Animaied.Value(1)).current;

      useEffect(()=>{
          //toValue와 useNativeDriver는 필수 입력값
          Animated.timing(animation, {
              toValue: 0,
              useNativeDriver: true,
          }).start();
      return () => {};
    }, [animation]);

    return (
      <Animated.View
          style={{
              // 위 Animated의 timing이 0이 되면서 opacity도 0이 되는 구조
              opacity: animation,
              // 여러 스타일을 동시에 적용하고 싶을때 사용
              // inputRange : 위에서 정의한 toValue 값
              // outputRange : inputRange 값에 따라 변동되는 속성값
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [INPUT_VALUE2, INPUT_VALUE1],
                    outputRange: [50, 150],
                  }),
                },
              ],

              backgroundColor: 'red',
              width: 100,
              height: 100,
            }}>

      </Animated.View>
    )
  }
  ```

  - useRef와 함께 사용함으로서 reference를 선택하고 애니메이션의 속성을 지정할때에 `toValue` 와 `useNativeDriver` 값 입력은 필수
  - 단, `useNativeDriver`는 JS엔진이 아닌 Native엔진에서 진행하는 옵션이므로 transform, opacity 처럼 레이아웃과 관련이 없는 스타일에만 적용

- `<View/>` 컴포넌트에 `style`로 animation 동작 액션을 넣으려면 `<Animated.View/>`를 사용해야 style에 해당 액션을 주입하였을때 에러가 나지 않음

## 느낀 점

- 전역 상태관리를 context API를 활용하며 'render props' 디자인패턴에 대해 다시금 복습한 계기가 되었다.
- 6.4 페이지(글 목록 보여주기) 에서 정규식을 사용하여 줄바꿈 제거를 하는데 유용하다고 생각되었고, 정규식 공부를 해야할 것 같다.
- useRef를 활용한 다음 입력칸 포커스 처리가 흥미로웠다.
- react-native의 내부 타입구조가 웹과 다르다보니 혼동이 와서 공부좀 해야할 것 같다.
- SearchScreen 에서 FeedList 컴포넌트를 재사용할때의 그 방법을 보며 아이디어를 얻은 것 같다.(LogContext를 활용하여 검색 시스템 구조를 구축한 방법)
