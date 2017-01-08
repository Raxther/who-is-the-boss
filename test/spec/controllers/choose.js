'use strict';

describe('Controller: ChooseCtrl', function () {

  // load the controller's module
  beforeEach(module('whoIsTheBestApp'));

  var ChooseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChooseCtrl = $controller('ChooseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ChooseCtrl.awesomeThings.length).toBe(3);
  });
});
