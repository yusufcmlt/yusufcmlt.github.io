import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBev9S7hzYO2KnaZJLNPWLwND5yC00qXRo",
  authDomain: "portofolio-db.firebaseapp.com",
  databaseURL: "https://portofolio-db.firebaseio.com",
  projectId: "portofolio-db",
  storageBucket: "portofolio-db.appspot.com",
  messagingSenderId: "738947011764",
  appId: "1:738947011764:web:ee6e8491482a32df0873e1",
  measurementId: "G-Q1YVQ4VG9P",
};

export const createNewContactMessage = async (contactObj) => {
  //New or existing messages reference
  const contactRef = firestore.collection("contactMessages").doc();

  //Getting message snapshot.
  const snapShot = await contactRef.get();

  //Creating a new message object on database
  if (!snapShot.exists) {
    const { name, email, messageSent } = contactObj;
    const sentAt = new Date();

    //Saving message
    try {
      await contactRef.set({ name, email, sentAt, messageSent });
    } catch (error) {
      console.log("error sending message", error.message);
    }
  }
  return contactRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
