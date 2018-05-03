console.log('Ready');

var config = {
    apiKey: 'AIzaSyD2OpXee9TD17oKFORJJGPq51b5ZzFBFL8',
    authDomain: 'techstrav-signage.firebaseapp.com',
    databaseURL: 'https://techstrav-signage.firebaseio.com',
    projectId: 'techstrav-signage',
    storageBucket: 'techstrav-signage.appspot.com',
    messagingSenderId: '492385124811'
};
firebase.initializeApp(config);


function card(announcement) {
    "use strict";
    if (!announcement.public) {
        return;
    }
    let template = document.querySelector('.announcement-card-template').innerText;
    let html = template.replace('%%%TITLE%%%', announcement.title);
    html = html.replace('%%%CONTENT%%%', announcement.content);
    let elem = document.createElement('div');
    elem.innerHTML = html;
    document.querySelector('.list').append(elem);
}

function featured(announcement) {
  let template = document.querySelector('.featured-template').innerText;
  let html = template.replace('%%%TITLE%%%', announcement.title);
  html = html.replace('%%%CONTENT%%%', announcement.content);
  let elem = document.createElement('div');
  elem.innerHTML = html;
  elem.classList.add('featured');
  document.querySelector('.featured').replaceWith(elem);
}

// Get a reference to the database service
var database = firebase.database();
var ref = database.ref('testAnnouncements');
ref.on('value', function (snapshot) {
    events = snapshot.val();
    document.querySelector('.list').innerHTML = '';
    var first = events.length-1;
    do
    {
      if ((event = events[first]).public)
      {
        featured(events[first]);
      }
      first--;
    } while(!event.public);
    for (var i = first; i >= 0; i--) {
        event = events[i];
        if (event.title) {
            console.log(event.title);
        }
        if (event.content){
            console.log(event.content);
        }
        card(event);
    }
});
