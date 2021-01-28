import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PORTFOLIO_API_KEY,
  authDomain: process.env.REACT_APP_PORTFOLIO_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_PORTFOLIO_DATABASEURL,
  projectId: process.env.REACT_APP_PORTFOLIO_PROCJECTID,
  storageBucket: process.env.REACT_APP_PORTFOLIO_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_PORTFOLIO_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_PORTFOLIO_APPID,
  measurementId: process.env.REACT_APP_PORTFOLIO_MEASUREMENTID,
};

export const createNewContactMessage = async (contactObj) => {
  //New or existing messages reference
  const contactRef = firestore
    .collection(process.env.REACT_APP_PORTFOLIO_MESSAGE_COLLECTION)
    .doc();

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

export const deleteMessage = (messageID) => {
  firestore
    .collection(process.env.REACT_APP_PORTFOLIO_MESSAGE_COLLECTION)
    .doc(messageID)
    .delete()
    .then(() => {
      alert("Message Deleted");
    })
    .catch((error) => alert("Can not remove message"));
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

export const firestore = firebase.firestore();
export default firebase;
