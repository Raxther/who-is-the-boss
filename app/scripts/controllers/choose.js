'use strict';

/**
 * @ngdoc function
 * @name whoIsTheBestApp.controller:ChooseCtrl
 * @description
 * # ChooseCtrl
 * Controller of the whoIsTheBestApp
 */

angular.module('whoIsTheBestApp')
  .controller('ChooseCtrl', function ($scope,_) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var left;
    var right;
	var data = firebase.database().ref('/Characters').once('value').then(function(snapshot) {
		  var all_char = snapshot.val();
		  var battle = _.sample(all_char, 2);
		  left = battle[0];
		  console.log(left.picture);
		  right = battle[1];
		  $scope.$apply(function () {
			$scope.gauche = left.name;
			$scope.pictureg = left.picture;
			$scope.droite = right.name;
			$scope.pictured = right.picture;
          })
		  
		});





	var refresh = function(){
		var data = firebase.database().ref('/Characters').once('value').then(function(snapshot) {
		  var all_char = snapshot.val();
		  var battle = _.sample(all_char, 2);
		  left = battle[0];
		  right = battle[1];
		  $scope.$apply(function () {
			$scope.gauche = left.name;
			$scope.pictureg = left.picture;
			$scope.droite = right.name;
			$scope.pictured = right.picture;
          })

		  
		  console.log("refresh")
		});
	};


	$scope.pick_left = function(){
		var test = rootRef.child('Characters').orderByChild('name').equalTo(left.name).on('child_added', function(snapshot) {
		    firebase.database().ref('Characters/' + snapshot.getKey()).update({
				score : left.score + 1,
				appearance : left.appearance + 1
			  });
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});

		var test = rootRef.child('Characters').orderByChild('name').equalTo(right.name).on('child_added', function(snapshot) {
		    firebase.database().ref('Characters/' + snapshot.getKey()).update({
				appearance : right.appearance + 1
			  });
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});

		console.log(test)

		refresh();
	};

	$scope.pick_right = function(){
		var test = rootRef.child('Characters').orderByChild('name').equalTo(right.name).on('child_added', function(snapshot) {
		    firebase.database().ref('Characters/' + snapshot.getKey()).update({
				score : right.score + 1,
				appearance : right.appearance + 1
			  });
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});

		var test = rootRef.child('Characters').orderByChild('name').equalTo(left.name).on('child_added', function(snapshot) {
		    firebase.database().ref('Characters/' + snapshot.getKey()).update({
				appearance : left.appearance + 1
			  });
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
		console.log(test)

		refresh();
	};



    $scope.login_google = function(){
    	var auth = firebase.auth();

		var provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider).then(function(result) {
		  // User signed in!
		  var uid = result.user.uid;
		}).catch(function(error) {
		  // An error occurred
		});

    };


    
  });
