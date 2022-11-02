import firstore from '@react-native-firebase/firestore';

export const usersCollection = firstore().collection('users');

type CreateUserTypes = {
  id: string;
  displayName: string;
  photoURL: string | null;
};

export function createUser({id, displayName, photoURL}: CreateUserTypes) {
  return usersCollection.doc(id).set({id, displayName, photoURL});
}

export async function getUser(id: string) {
  const doc = await usersCollection.doc(id).get();
  return doc.data();
}
