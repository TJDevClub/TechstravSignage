var config = {
    apiKey: 'AIzaSyD2OpXee9TD17oKFORJJGPq51b5ZzFBFL8',
    authDomain: 'techstrav-signage.firebaseapp.com',
    databaseURL: 'https://techstrav-signage.firebaseio.com',
    projectId: 'techstrav-signage',
    storageBucket: 'techstrav-signage.appspot.com',
    messagingSenderId: '492385124811'
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
var ref = database.ref('testAnnouncements');
ref.on('value', function (snapshot) {
    events = snapshot.val();
    for (var event in events) {
        console.log(event);
    }
});
