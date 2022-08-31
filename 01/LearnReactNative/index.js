/**
 * //foramt은 Prettier와 관련이 있다.
 * // prettier 내에서 --require-pragma 란 명령어옵션을 설정하면 아래 포맷 명령어가 있는 파일만 코드 스타일을 자동으로 정리해준다.
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// !! App 이란 컴포넌트를 불러와서 AppRegistry.registerComponent 라는 함수를 사용하여 네이티브 시스템에 해당 컴포넌트 등록
// 위 작업을 해줘야 네이티브 시스템에서 RN 컴포넌트를 화면에 보여줄 수 있음
AppRegistry.registerComponent(appName, () => App);
