import firebase from 'firebase'
 const config = {
    apiKey: "AIzaSyCf7nptSRCtlcw62ys5qWNEP8gxTYaCmHU",
    authDomain: "reactaaa-be8e7.firebaseapp.com",
    databaseURL: "https://reactaaa-be8e7.firebaseio.com",
    projectId: "reactaaa-be8e7",
    storageBucket: "",
    messagingSenderId: "580729796173",
    appId: "1:580729796173:web:5f4c449aec8b76b0b30e04",
    measurementId: "G-L71NLMXCHL"
  };
  // Initialize Firebase
  const fire =  firebase.initializeApp(config);
 export default fire;
