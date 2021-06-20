import firebase from 'firebase/app';
import 'firebase/firestore';

import config from '../db_config';

export const firedb = firebase.initializeApp(config);
export const db = firedb.firestore();

// kis hibakezelés is van benne....
export async function addData(data) {
  try {
    await db.collection('myData').add(data);
  } catch (e) {
    window.alert('oops, something went wrong!');
  }
}

export async function getData() {
  const snapshot = await db.collection('myData').get();

  const result = [];
  for (const doc of snapshot.docs) {
    result.push(doc.data());
  }
  return result;
}

