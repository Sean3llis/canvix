// Firebase App is always required and must be first
var firebase = require("firebase/app");

// Add additional services that you want to use
require("firebase/auth");
require("firebase/database");
require("firebase/firestore");
require("firebase/messaging");
require("firebase/functions");

var config = {
  apiKey: "AIzaSyCqXG8GZ3Nh3j8friDql5sj87nJt3MR23w",
  authDomain: "canvix.firebaseapp.com",
  databaseURL: "https://canvix.firebaseio.com",
  projectId: "canvix",
  storageBucket: "canvix.appspot.com",
  messagingSenderId: "979266960546"
};
firebase.initializeApp(config);
export default firebase;