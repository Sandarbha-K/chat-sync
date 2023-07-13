import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyACnAY2miR4A6SFgvKmwfZ8OXEbW8gUBzU",
//   authDomain: "fir-chat-app-73c83.firebaseapp.com",
//   projectId: "fir-chat-app-73c83",
//   storageBucket: "fir-chat-app-73c83.appspot.com",
//   messagingSenderId: "595222348421",
//   appId: "1:595222348421:web:4a3024a6b0fa933f471fec"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDClPKKLyOBKJYVhlTvbadNTK-q6RXq2AY",
  authDomain: "chat-app-firebase-8153a.firebaseapp.com",
  projectId: "chat-app-firebase-8153a",
  storageBucket: "chat-app-firebase-8153a.appspot.com",
  messagingSenderId: "932975007460",
  appId: "1:932975007460:web:87ec568e520d9691a4bef1"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const storage=getStorage(app);
export const db =getFirestore(app);