# Login feature file
Feature: Login functionality

  Scenario: User can login with valid credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully
