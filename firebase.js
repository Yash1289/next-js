import firebase from 'firebase/app';
require('firebase/database');
import { DUMMY_EVENTS } from './seed-data';


 var firebaseConfig = {
    apiKey: "AIzaSyA8eX46RNQOhNxMt1832lFhRHSSg2WUO7E",
    authDomain: "next-js-e757b.firebaseapp.com",
    databaseURL: "https://next-js-e757b-default-rtdb.firebaseio.com",
    projectId: "next-js-e757b",
    storageBucket: "next-js-e757b.appspot.com",
    messagingSenderId: "313675379700",
    appId: "1:313675379700:web:a6bc1c4326e1ab7b39bfa1"
  };
  // Initialize Firebase
  if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

 const database = firebase.database()

/*  DUMMY_EVENTS.forEach((event) => {
    database.ref("events").child(event.id).set({
        description : event.description ,
        title : event.title ,
        image : event.image , 
        isFeatured : event.isFeatured ,
        location : event.location ,
        date : event.date
    })
})  */

export default database;