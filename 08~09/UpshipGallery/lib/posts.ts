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

export const PAGE_SIZE = 12;

type GetPostProps = Partial<{
  userId: string;
  mode: 'newer' | 'older';
  id: string;
}>;

export async function getPosts({userId, mode, id}: GetPostProps = {}) {
  let query = postsCollection.orderBy('createdAt', 'desc').limit(PAGE_SIZE);

  if (userId) {
    query = query.where('user.id', '==', userId);
  }

  if (id && mode !== undefined) {
    const cursorDoc = await postsCollection.doc(id).get();
    query =
      mode === 'older'
        ? query.startAfter(cursorDoc)
        : query.endBefore(cursorDoc);
  }

  const snapshot = await query.get();

  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as PostTypes[];

  return posts;
}

export async function getOlderPosts(id: string, userId?: string) {
  return getPosts({
    id,
    mode: 'older',
    userId,
  });
}

export async function getNewerPosts(id: string, userId?: string) {
  return getPosts({
    id,
    mode: 'newer',
    userId,
  });
}
