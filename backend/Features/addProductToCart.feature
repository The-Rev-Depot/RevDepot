Feature: The user should be able to add an item to the cart

  Scenario: if the user is logged in, they should be able to add an item to a cart
    Given that the user is logged in
    When the user clicks on the add to cart button
    And opens the side cart panel
    Then the user should see the item added into their cart.
