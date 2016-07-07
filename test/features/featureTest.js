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

  // it('can see to do items', function() {
  //   browser.assert.text('body', 'Eat breakfast');
  // });
});