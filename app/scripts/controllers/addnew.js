'use strict';

/**
 * @ngdoc function
 * @name whoIsTheBestApp.controller:AddnewCtrl
 * @description
 * # AddnewCtrl
 * Controller of the whoIsTheBestApp
 */
angular.module('whoIsTheBestApp')
  .controller('AddnewCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  console.log("start");
    var auth = firebase.auth();
    var storageRef = firebase.storage().ref();
    var database = firebase.database().ref('/Characters');
    var size;
    var data = firebase.database().ref('/size').once('value').then(function(snapshot) {
    	  size = snapshot.val() + 1;
	      console.log(size);
	});

    function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      var file = evt.target.files[0];
      console.log(file);
      var metadata = {
        'contentType': file.type
      };
      console.log(metadata);

      // Push to child path.
      // [START oncomplete]
      storageRef.child('images/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        var url = snapshot.metadata.downloadURLs[0];
        $scope.url = url;
        console.log('File available at', url);
        // [START_EXCLUDE]
        document.getElementById('linkbox').innerHTML = '<a href="' +  url + '">Click For File</a>';
        // [END_EXCLUDE]
      }).catch(function(error) {
        // [START onfailure]
        console.error('Upload  failed:', error);
        // [END onfailure]
      });
      // [END oncomplete]
    }
    var userId;
    $scope.load = function() {
      document.getElementById('file').addEventListener('change', handleFileSelect, false);
      document.getElementById('file').disabled = true;
      auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('Anonymous user signed-in.', user.uid);
          userId = user.uid;
          document.getElementById('file').disabled = false;
        } else {
          console.log('There was no anonymous session. Creating a new anonymous user.');
		  alert('you need to be logged to add new character');
          auth.signInAnonymously();
        }
      });
    }

    $scope.AddPost = function(){
            var title = $scope.name;
            var post = $scope.url;
		  firebase.database().ref('Characters/' + userId).set({
		    _id: "000"+ size,
		    name: title,
		    score : 0,
		    picture : post
		  });


        }

  });
