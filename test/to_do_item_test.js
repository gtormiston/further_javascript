
var expect = require("chai").expect;
var ToDoItem = require("../models/toDoItem").ToDoItem;
var toDoItem;

describe ("ToDoItem", function() {

  beforeEach(function() {
    toDoItem = new ToDoItem();
  });

  it("object is instantiated with an empty task and false complete attr", function() {
    expect(toDoItem.task).to.equal("");
    expect(toDoItem.isComplete).to.equal(false);
  });

  describe ("#setTask", function() {
    it("can store a task", function() {
      toDoItem.setTask("Eat breakfast");
      expect(toDoItem.task).to.equal("Eat breakfast");
    });
  });

  describe ("#getTask", function() {
    it("can retrive a task", function() {
      toDoItem.setTask("Eat breakfast");
      expect(toDoItem.getTask()).to.equal("Eat breakfast");
    });
  });

  describe ("#complete", function() {
    it("completes a task", function() {
      toDoItem.complete();
      expect(toDoItem.isComplete).to.equal(true);
    });
  });

  describe ("#checkComplete", function() {
    it("checks if taks is completed", function() {
      toDoItem.complete();
      expect(toDoItem.checkComplete()).to.equal(true);
    });
  });

});