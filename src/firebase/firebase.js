import * as firebase from 'firebase'


const  config = {
    apiKey: "AIzaSyDhx0-r8awscR1D88Qlm9gIJ6qSPzFNgbQ",
    authDomain: "expensify-97e3e.firebaseapp.com",
    databaseURL: "https://expensify-97e3e.firebaseio.com",
    projectId: "expensify-97e3e",
    storageBucket: "expensify-97e3e.appspot.com",
    messagingSenderId: "564781457449"
  }


  firebase.initializeApp(config)
  const db = firebase.database()


  db.ref().set({
      firstName: 'Giorgi',
      lastName: 'Undilashvili',
      Age : 25,
      location: {
          Country: 'Georgia',
          city: 'Tbilisi'
      },
      Attributes: {
          weight: 100,
          height: 200
      }
  })

  db.ref('Age').set(22)
  db.ref('Attributes/weight').set(1)
  db.ref('Attributes/height').set(2)
