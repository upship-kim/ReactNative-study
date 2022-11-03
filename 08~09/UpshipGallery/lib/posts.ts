import firstore from '@react-native-firebase/firestore';
import {UserType} from '../contexts/userContext';

export const postsCollection = firstore().collection('posts');

type CreatePostTypes = {
  user: UserType;
  photoURL: string | null;
  description: string;
};

export function createPost({user, description, photoURL}: CreatePostTypes) {
  return postsCollection.add({
    user,
    description,
    photoURL,
    createdAt: firstore.FieldValue.serverTimestamp(),
  });
}
