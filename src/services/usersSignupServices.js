import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { fetchSignInMethodsForEmail, signInWithPopup } from 'firebase/auth';

export const addDataWithCustomizedId = async (id, data) => {
  const docRef = doc(db, 'usersDetails', id);
  await setDoc(docRef, data);
};

export const emailExistVerif = async email => {
  let userExist = false;
  const signInMethods = await fetchSignInMethodsForEmail(auth, email);
  signInMethods.length > 0 ? (userExist = true) : (userExist = false);
  return userExist;
};

export const googleSignup = async (auth, provider) => {
  try {
    await signInWithPopup(auth, provider).then(result => console.log(result));
  } catch (error) {
    console.log(error);
  }
};

export const facebookSignup = async (auth, provider) => {};
