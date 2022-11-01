> 본 예제는 Typescript template 으로 작성되었고, 6~7장 예시의 내용은 JS로 구현되어있지만 TS로 적용하며 스터디 진행
> 그래서 다른 장(12장)에 타입스크립트 적용하기 내용과 중복될 수 있음

<br/>

<br/>

### 실행 방법

1. `yarn` 명령어를 통해 dependency 설치
2. `cd ios`로 이동후 `arch -x86_64 pod install` 설치
3. `arch -x86_64 pod install --repo-update` 설치
4. `yarn start` 이후 `yarn ios` 또는 `yarn android`

<br/>
<br/>

# 08~09 Firebase 로 사진 공유 앱 만들기

## Trouble Shooting

### 1. firebase 라이브러리 설치 이후 빌드 실패

```jsx
//버전 정보
{
  'react version' : "18.1.0"
  'react-native version' : "0.70.4"
  'react-native-firebase version' : "16.4.0"
  'Xcode version' : "13.4.1"
  'Xcode project format version' : "Xcode 12.0 compatible"
}
```

**1) 빌드 실패 현상**

- "리액트 네이티브를 다루는 기술" 책을 참고하여 Firebase 연동 챕터를 진행하였을 때 ios 빌드 실패와
  Firebase 연동을 위해 설치한 `react-native-firebase` 라이브러리 관련 에러가 매우 많이 발생함

- 책이 집필된 시점의 RN version 과 현재 시점의 버전이 맞지 않아 생긴 이슈라 생각했지만 근본적으로 이슈가 발생하였을때 **_공식 문서보다_** 스택오버플로우나 국내외 블로그를 참고했던게 시간을 더 많이 들였던 근본적인 원인이 되었다고 생각함

**2) 해결 방안**

- [react-native-firebase 공식 문서](https://rnfirebase.io/) 와 [react-native-firebase v6버전 마이그레이션 문서](https://rnfirebase.io/migrating-to-v6)를 주로 참고하였고
- 환경 셋팅에 있어 기본적인 내용은 '리액트 네이티브를 다루는 기술' 책을 참고하였다.
- 셋팅이 진행됨에 있어서 `#import <Firebase.h> 를 찾을 수 없다는 에러 로그` 를 맞닥뜨렸을 때는 [스택오버플로우 관련 글](https://stackoverflow.com/questions/63771070/use-of-undeclared-identifier-firapp) 을 참고하여 해결
- 빌드는 성공이 되었지만 시뮬레이터를 구동함에 있어서 크러쉬 난 이슈에 대해서는 [애플 공식 문서](https://developer.apple.com/documentation/xcode/understanding-the-exception-types-in-a-crash-report#EXCCRASH-SIGABRT) 를 통해 어떤 원인인지 파악하였고, [react-native-firebase 의 git issue](https://github.com/invertase/react-native-firebase/issues/247#issuecomment-315131432) 를 통해 해결할 수 있었다.

**3) reference**

- "리액트 네이티브를 다루는 기술" 책
- [react-native-firebase 공식 문서](https://rnfirebase.io/)
- [react-native-firebase v6버전 마이그레이션 문서](https://rnfirebase.io/migrating-to-v6)
- [스택오버플로우 관련 글](https://stackoverflow.com/questions/63771070/use-of-undeclared-identifier-firapp)
- [애플 공식 문서](https://developer.apple.com/documentation/xcode/understanding-the-exception-types-in-a-crash-report#EXCCRASH-SIGABRT)
- [react-native-firebase 의 git issue](https://github.com/invertase/react-native-firebase/issues/247#issuecomment-315131432)
