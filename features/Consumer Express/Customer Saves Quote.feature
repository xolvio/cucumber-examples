Feature: Customer Saves Quote
  
  As a customer
  I want to be able to save my quote
  So that I can come back and purchase when I'm ready
  
  # Scenario: review their quote before they go ahead and purchase
  
  Background:
  
  Scenario: Logged in travellers can save the quote
    Given I have been referred from a partner website
    And  I am logged in
    When I submit my details to receive a quote
    Then I am able to save my quote
    
  Scenario: Non registered travelers can save the quote
    Given I have been referred from a partner website
    And  I am not logged in
    And I submitted my details to receive a quote
    When I try to save my quote
    Then I am able to create an account
    
  Scenario: Email quote to themselves or someone else
    Given I am logged in
    And I have submitted my details my details
    When I save my quote
    Then I am able to email the quote to myself
    And I am able to email the quote to others