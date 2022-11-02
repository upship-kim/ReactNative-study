import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {FormTypes} from '../screens/SignInScreen';

type SignInProps = Omit<FormTypes, 'confirmPassword'>;
type CallbackProps = () => void;

export interface FirebaseErrorTypes extends Error {
  code: string;
  message: string;
  namespace: string;
  nativeErrorCode: string | number;
  nativeErrorMessage: string;
}

export function signIn({email, password}: SignInProps) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}: SignInProps) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback: CallbackProps) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}
