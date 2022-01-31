Feature: add a product to the cart from the apparel page

  Scenario: add a product to the cart from the apparel page
    Given The user is logged in and is on the home page of the app
    When the user clicks the apparel button
    And clicks on the button to add apparel item to the cart
    And the user opens the cart by clicking on the cart icon
    Then the user should see the apparel item in their cart.
