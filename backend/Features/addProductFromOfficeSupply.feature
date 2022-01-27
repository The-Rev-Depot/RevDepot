Feature: a user should be able to navigate to office supplies and add a product to cart

  Scenario: A user should be able to add product to cart from office supplies
    Given that a user is logged in and on the home page
    When the user clicks the office supplies button
    And clicks on the add product button of an office supllies product
    And the user clicks on the cart icon
    Then the user should see the office supply product in their cart
