Feature: Example feature
  As a user of webdriverjs
  I should be able to use different commands
  to get information about elements on the page

  Scenario: Get title of website
    Given I go on the website "http://google.com"
    When I use getTitle() to get the title of this website
    Then the command should return "Google"