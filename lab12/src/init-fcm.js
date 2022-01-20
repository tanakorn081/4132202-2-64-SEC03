import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyCTd-0w0VpWreQcGtakOLKJYgJDYxqHNE8",
  authDomain: "sec03-4827e.firebaseapp.com",
  projectId: "sec03-4827e",
  storageBucket: "sec03-4827e.appspot.com",
  messagingSenderId: "1070987382766",
  appId: "1:1070987382766:web:4b060a23671f35abc4c8ff",
  measurementId: "G-KSPYPFM4T7"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BHeybFFiTs6f45oXJ5_sKvphN5jlcNlIA_ffPSCgoPnWCsjIVJECEhtNsA_tUGtucVO7wSYU4uEman2gnvSE-v0"
);

export { messaging };
