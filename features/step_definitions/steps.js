/**
 * to run these tests you need install Cucumber.js on your machine
 * take a look at https://github.com/cucumber/cucumber-js for more informations
 *
 * first, install Cucumber.js via NPM
 * $ npm install -g cucumber
 *
 * then go into the cucumber directory and start the tests with
 * $ cucumber.js
 */

var webdriverjs = require('webdriverio'),
assert      = require('assert');

var sharedSteps = module.exports = function(){

  var client    = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'}, logLevel: 'silent' }),
      tmpResult = null;
  client.init();

  this.Given(/^I go on the website "([^"]*)"$/, function(url, next) {
    client
      .url(url)
      .call(next);
  });

  this.When(/^I use getTitle\(\) to get the title of this website$/, function(next) {
    client
      .getTitle(function(err, title) {
        assert(err === undefined, 'command getTitle() returns with an error');
        tmpResult = title;
        next();
      });
  });

  this.Then(/^the command should return "([^"]*)"$/, function(result, next) {
    assert(tmpResult == result , ' result of command is "'+ tmpResult + '" but should be "'+ result);
    next();
  });
};