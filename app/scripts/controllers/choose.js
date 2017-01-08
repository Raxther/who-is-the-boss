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
		  right = battle[1];
		});

	var refresh = function(){
		var data = firebase.database().ref('/Characters').once('value').then(function(snapshot) {
		  var all_char = snapshot.val();
		  var battle = _.sample(all_char, 2);
		  left = battle[0];
		  right = battle[1];
		});
	}

	$scope.pick_left = function(){
		console.log(left);
		refresh();
	}

	$scope.pick_right = function(){
		console.log(right);
		refresh();
	}



    $scope.login_google = function(){
    	var auth = firebase.auth();

		var provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider).then(function(result) {
		  // User signed in!
		  var uid = result.user.uid;
		}).catch(function(error) {
		  // An error occurred
		});

    }


    
  });
