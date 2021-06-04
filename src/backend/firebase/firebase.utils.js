import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDM5qlDNmlHcROMyMHbHxTATr45XgNJFPo",
    authDomain: "recipe-hut-134.firebaseapp.com",
    projectId: "recipe-hut-134",
    storageBucket: "recipe-hut-134.appspot.com",
    messagingSenderId: "726025897399",
    appId: "1:726025897399:web:f8d91beddf0274098e5432",
    measurementId: "G-XMJL7X8Q38"
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
        const createdAt = new Date();
        try {
            await userRef.set(
            {displayName,
            email,
            createdAt,
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

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;