var server = require("http-server").createServer();
var assert = require('assert');
var Browser = require('zombie');

describe("Interface", function() {


  var browser = new Browser({ site: 'http://localhost:3000'  });
  server.listen(3000);

  beforeEach(function(done){
    browser.visit('/', done);
  });

  it('can see title', function(){
    browser.assert.text('title', 'To Do List');
  });

  it('has a form to add a task', function() {
    browser.assert.element('form');
  });

  it('can add task to the list', function() {
    browser.fill('task', 'call nan');
    browser.pressButton('Add task');
    browser.assert.text('.list', 'call nan');
  });

});