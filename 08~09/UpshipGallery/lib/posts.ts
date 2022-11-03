import firstore from '@react-native-firebase/firestore';
import {UserType} from '../contexts/userContext';

export const postsCollection = firstore().collection('posts');

type CreatePostTypes = {
  user: UserType;
  photoURL: string | null;
  description: string;
};

export type PostTypes = {
  user: UserType;
  photoURL: string | null;
  description: string;
  createdAt: {nanoseconds: Date; seconds: Date};
  id: string;
};

export function createPost({user, description, photoURL}: CreatePostTypes) {
  return postsCollection.add({
    user,
    description,
    photoURL,
    createdAt: firstore.FieldValue.serverTimestamp(),
  });
}

export const PAGE_SIZE = 2;

export async function getPosts() {
  const snapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .limit(PAGE_SIZE)
    .get();
  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as PostTypes[];

  return posts;
}

export async function getOlderPosts(id: string) {
  const cursorDoc = await postsCollection.doc(id).get();
  const snapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .startAfter(cursorDoc)
    .limit(PAGE_SIZE)
    .get();
  const posts = snapshot.docs.map(item => ({
    id: item.id,
    ...item.data(),
  })) as PostTypes[];
  return posts;
}

export async function getNewerPosts(id: string) {
  const cursorDoc = await postsCollection.doc(id).get();
  const snapshot = await postsCollection
    .orderBy('createdAt', 'desc')
    .endBefore(cursorDoc)
    .limit(PAGE_SIZE)
    .get();
  const posts = snapshot.docs.map(item => ({
    id: item.id,
    ...item.data(),
  })) as PostTypes[];
  return posts;
}
