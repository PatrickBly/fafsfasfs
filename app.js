//#region FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "@firebase/app-compat";

// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQhTOqqIQ7OA9J6dcTeEeZX9QFVl6zsPc",
  authDomain: "stoicsounds-d113c.firebaseapp.com",
  projectId: "stoicsounds-d113c",
  storageBucket: "stoicsounds-d113c.appspot.com",
  messagingSenderId: "845377274297",
  appId: "1:845377274297:web:1b166eaa14ad7003dfb668",
  measurementId: "G-B20QG6DWDD"
};

// Initialize Firebase SDKs
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

//#endregion firebase SDKs

function signUp(){
    let email = document.getElementById('emailInputs');
    let password = document.getElementById('passwordInputs');
    firebase.auth.createUserWithEmailAndPassword(email, password).catch(function(){
        document.getElementById('createProfileButton').appendChild(generalErrorMsg)
    })
}

function attemptSignIn(){

}




//#region universal code
/*const generalErrorMsg = document.createElement('h2')
generalErrorMsg.className = "generalErrorMsg"
generalErrorMsg.innerHTML = "There has been an error. Refresh to try again."
const userAccess = {
    ARTIST:'artist',
    LISTENER:'listener'
};
var usersAndPermissions = [
    {USERids: userId, USERemails: emailInputs, USERname: usernameInput, USERpassword: passwordInputs},
]
//#endregion universal code
//#region adds users to list of users

function addToUsers(){
    let checkList = []
    if (usersAndPermissions.forEach(function(obj){checkList.push(obj.USERemails)}) == document.getElementById('emailLabel')){
        emailAlreadyInUseMsg = document.createElement('h2')
        emailAlreadyInUseMsg.innerHTML = 'That email already has an account!?'
        emailAlreadyInUseMsg.className = 'signInErrorMsg'
        document.getElementById('actualCreateProfileButton').appendChild(emailAlreadyInUseMsg) 
        window.location.href = '/signInAndAccountCreation/signInPage.html'
    } else if (usersAndPermissions.forEach(function(obj){checkList.push(obj.USERemails)}) != document.getElementById('emailLabel')){
        let emailInputs = global.document.getElementById('emailInputs').innerHTML
        let usernameInput = document.getElementById('usernameInputs').innerHTML
        let passwordInputs = document.getElementById('passwordInputs').innerHTML
        let userId = usersAndPermissions.length() + 1
        usersAndPermissions.push({USERids: userId, USERemails: emailInputs, USERname: usernameInput, USERpassword: passwordInputs})
        window.location.href = '/signInAndAccountCreation/signInPage.html'
    } else {
        document.getElementById('actualCreateProfileButton').appendChild(generalErrorMsg)
    }
}
//#endregion adds users to list of users

//#region sign in page code

function signIn(){
    let emailCheckList = [];
    let usernameCheckList = [];
    let passwordCheckList = [];
    let usernameAttempt = document.getElementById('emailOrUsernameSignInInputs');
    let passwordAttempt = document.getElementById('passwordSignInInputs');
    usersAndPermissions.forEach(function(obj){emailCheckList.push(obj.USERemails)});
    usersAndPermissions.forEach(function(obj){usernameCheckList.push(obj.USERname)});
    usersAndPermissions.forEach(function(obj){usernameCheckList.push(obj.USERpassword)});
    if ((usernameAttempt in usernameCheckList || usernameAttempt in emailCheckList) && passwordAttempt in passwordCheckList){
        window.location.href = '/signedIn/homePageFolder/yourHomePage.html';
    } else if (usernameCheckList.indexOf(usernameAttempt) == -1 || emailCheckList.indexOf(usernameAttempt) == -1 || passwordCheckList.indexOf(passwordAttempt) == -1){
        let incorrectInformationMsg = document.createElement('h2');
        incorrectInformationMsg.innerHTML = 'Your email/username or password is incorrect.';
    }
}

//#endregion sign in page code

function uploadProfilePic(){
    document.getElementById('changeProfileImg')
}

function songChosen(){
    document.getElementById('songUploadButton');
    document.getElementById('uploadingSongThumbnail');
}*/