import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

const firebase = require('firebase')

firebase.initializeApp({
  apiKey: 'AIzaSyCyXQMXx3QIC8TqAm9IGvu2oQ-aNIpb-jg',
  authDomain: 'evernote-clone-5a6af.firebaseapp.com',
  databaseURL: 'https://evernote-clone-5a6af.firebaseio.com',
  projectId: 'evernote-clone-5a6af',
  storageBucket: 'evernote-clone-5a6af.appspot.com',
  messagingSenderId: '988877858348',
  appId: '1:988877858348:web:c9bbaf41bb69ebda9d9389',
  measurementId: 'G-NRNM2KKPQ3'
})
// firebase.analytics()
ReactDOM.render(<App />, document.getElementById('evernote-container'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
