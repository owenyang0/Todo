'use strict';

describe('Service: Storage', function () {

  // load the service's module
  beforeEach(module('todoApp'));

  // instantiate service
  var Storage, cookieStore, todoList, todo;
  beforeEach(inject(function (_Storage_, $cookieStore) {
    Storage = _Storage_;
    cookieStore = $cookieStore;

    todoList = [{
      'title': 'Uncompleted Item 0',
      'completed': false
    }, {
      'title': 'Uncompleted Item 1',
      'completed': false
    }, {
      'title': 'Uncompleted Item 2',
      'completed': false
    }, {
      'title': 'Completed Item 0',
      'completed': true
    }, {
      'title': 'Completed Item 1',
      'completed': true
    }];

    Storage.put(todoList);
  }));

  it("should return array instead of other object", function() {
    expect(Storage.get() instanceof Array).toBeTruthy();
  });

  it("should get what you put from cookies", function () {
    expect(Storage.get()).toEqual(cookieStore.get("todo"));
  });

  it("should get what you put", function () {
    expect(Storage.get()).toEqual(todoList);
  });
});
