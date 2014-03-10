'use strict';

describe('Controller: TodoCtrl', function () {

  // load the controller's module
  beforeEach(module('todoApp'));

  var TodoCtrl,
    scope,
    storage;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Storage) {
    scope = $rootScope.$new();
    storage = Storage;
    TodoCtrl = $controller('TodoCtrl', {
      $scope: scope
    });
  }));

  afterEach(function () {
    // storage.put([]);
  });

  it('should not have an edited Todo on start', function () {
    expect(scope.editedTodo).toBeNull();
  });

  it('should not have any Todos on start', function () {
    expect(scope.todos.length).toBe(0);
  });

  describe('having no Todos', function () {
    var ctrl;

    beforeEach(inject(function ($controller) {
      ctrl = $controller('TodoCtrl', {
        $scope: scope,
        Storage: storage
      });
      scope.$digest();
    }));

    it('should not add empty Todos', function () {
      scope.newTodo = '';
      scope.addTodo();
      scope.$digest();
      expect(scope.todos.length).toBe(0);
    });

    it('should not add items consisting only of whitespaces', function () {
      scope.newTodo = '   ';
      scope.addTodo();
      scope.$digest();
      expect(scope.todos.length).toBe(0);
    });


    it('should trim whitespace from new Todos', function () {
      scope.newTodo = '  buy some unicorns  ';
      scope.addTodo();
      scope.$digest();
      expect(scope.todos.length).toBe(1);
      expect(scope.todos[0].title).toBe('buy some unicorns');
    });
  });
});
