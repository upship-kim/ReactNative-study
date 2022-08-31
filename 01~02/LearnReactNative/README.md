> 본 예제는 Typescrip template로 작성됨.

<br/>

<br/>

<br/>

### 실행 방법

`yarn ios` 또는 `yarn android`

> 안드로이드는 안드로이드 에뮬레이터를 켠 상태로 위 명령어 실행

<br/>
<br/>
<br/>

# 1쟝, 리액트 네이티브 첫걸음

## 새로 알게된 것

- `@format` 키워드가 Prettier와 연관되고 Prettier 내에서 `--require-pragma` 라는 명령어 옵션이 있을 경우 해당 키워드가 있는 파일만 코드 스타일링 한다
- react-native 기본 프로젝트 생성시 `flow` (정적 타입 시스템)가 기본 적용되어 있다.

## 새롭게 느껴지는 것

- `Metro` 는 리액트 네이티브를 위한 **자바스크립트 번들러** 로 프로젝트에 사용된 자바스크립트 파일을 모두 읽어서 올바른 순서로 하나의 파일로 합쳐주고, 네이티브 앱에서 실행할 준비를 해줌
- 네이티브 시스템에 컴포넌트를 등록/노출하기 위해 `index.js` 에서 `AppRegistry.registerComponent` 함수에 root component(<App/>) 에 등록
- 기본 컴포넌트 `<Text/>` 에 아무런 스타일링을 하지 않고 글씨를 적어 색상을 비교해보면 ios 가 더 진하다 (안드로이드는 회색처럼 보임), 폰트도 다르다

<br/>
<br/>
<br/>
<br/>

# 2장, 컴포넌트

## 새로 알게된 것

- `<SafeAreaView/>` iPhone X 이상의 기종에서 디스플레이의 보이지 않는 영역(노치)및 최하단 영역에 내용이 보이지 않는 것을 방지해줌

  - 하지만 iOS 버전 11 이상이 설치된 **iOS 기기**에만 적용되므로 안드로이드의 펀치홀 대응이 별도로 필요함

- 리액트 네이티브에서 스타일링할때에 숫자 단위는 dp 뿐이다

  - [px, dp 차이점](https://selfish-developer.com/entry/px-dp-sp-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)

- `borderWidth` 값을 통해서 테두리의 두께를 정하였을때 ios는 테두리를 피해 안쪽에 텍스트가 위치하였는데 android는 테두리와 겹침 현상 발생
  - text에 직접적인 padding 또는 margin , textAlignVertical 속성을 주어 UI 변경해야함

## 새롭게 느껴지는 것

- `display: flex` default 값으로 설정 되어 있고 `flexDirection : column` 으로 맞춰져 있음

  - justifyContent 또는 alignItems 쓸 때에 유의 !

- react-native 에서 지원하는 `<View/>`, `<Text/>` 컴포넌트는 대문자부터 시작한다

  - 기본 컴포넌트라 착각해서 react와 같이 `<view/> or <text/>` 로 작성하는 일은 없길...

- styling은 타겟 컴포넌트에 해당하는 스타일링만 진행할 것 !!!

  - 예를들어 `<View/>`안에 `<Text>` 컬러를 바꾸고 싶다하였을 때 암만 View 컴포넌트 스타일을 바꿔봤자 안바뀜... (Text 에서 바꾸어야 함 !)

- `<Button/>` 의 스타일링이 color 속성에 값을 주면 ios는 **텍스트에**, android는 **배경에** 적용된다

## 느낀 점

- component styling 을 테스트하며 atomic design pattern 이 도입되면 정말 효율적일 것 같다란 생각을 하였음
  - android, ios 별 보여지는게 다를 수 있으므로 별개의 스타일링은 지양하고 되도록 공통 컴포넌트를 쓰는게 좋을 것 같다.
