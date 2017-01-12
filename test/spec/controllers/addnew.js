'use strict';

describe('Controller: AddnewCtrl', function () {

  // load the controller's module
  beforeEach(module('whoIsTheBestApp'));

  var AddnewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddnewCtrl = $controller('AddnewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddnewCtrl.awesomeThings.length).toBe(3);
  });
});
