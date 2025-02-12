import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD9AKhw3DiC6MuRQu2I6nidet0ZtVFGJp4",
  authDomain: "pekchek-4d9f5.firebaseapp.com",
  projectId: "pekchek-4d9f5",
  storageBucket: "pekchek-4d9f5.firebasestorage.app",
  messagingSenderId: "457166168266",
  appId: "1:457166168266:web:309d6ca0209bd3c3c09433",
  measurementId: "G-1CCK2G1QN1",
}

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

