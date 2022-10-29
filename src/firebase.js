import {
	initializeApp
} from "firebase/app";

import {
	getStorage,
	ref
} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDj08R7edmYvvMEnhr09WnFCUFj8b1nS3E",
	authDomain: "zainab-portfolio.firebaseapp.com",
	projectId: "zainab-portfolio",
	storageBucket: "zainab-portfolio.appspot.com",
	messagingSenderId: "207986560987",
	appId: "1:207986560987:web:002aafecf1eef5133de1fe",
	measurementId: "G-9D2SDV3848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export const storageRef = ref(storage, 'Resume.pdf');