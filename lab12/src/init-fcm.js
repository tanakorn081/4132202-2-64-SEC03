import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyCby5XfpDoYFCCjNndbLL15IeKn_13ahVc",
  authDomain: "react-sec03-081.firebaseapp.com",
  projectId: "react-sec03-081",
  storageBucket: "react-sec03-081.appspot.com",
  messagingSenderId: "25294210473",
  appId: "1:25294210473:web:42e8ae440c1e4c962e30b8"
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
  "BOvGimTVGFdAA-fEIkBKNCfG9T3v5aWOOEoIQxARLQShI90a-HRas9qhvyK-1AyHWPrmZ6I5iaxADA9CXTCXlVE"
);

export { messaging };
