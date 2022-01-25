Feature: user can login

  Scenario: User can login
    Given a user is on a webpage
    And the user enters correct credentials
    When user clicks enter
    Then the user is nav to the home page
