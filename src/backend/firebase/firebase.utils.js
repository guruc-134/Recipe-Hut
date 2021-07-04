import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "recipe-hut-134.firebaseapp.com",
    projectId: "recipe-hut-134",
    storageBucket: "recipe-hut-134.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) =>
{
    if (!userAuth) return ;  
    const userRef = firestore.doc(`users/${userAuth.uid}`)    
    const snapShot = await userRef.get();    
    if(!snapShot.exists)
    {
        const {displayName, email} = userAuth;
        const isAdmin = false
        const createdAt = new Date();
        try {
            await userRef.set(
            {displayName,
            email,
            createdAt,
            isAdmin,
            ...additionalData
            })
        }
        catch (error)
        {
            console.log('error creating user',error.message)
        }
    }
    return userRef;
    
};


export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;