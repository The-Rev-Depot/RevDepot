Feature: add product to the cart from the clothes page

  Scenario: a user should be able to add a product to the cart from the clothes page
    Given that a user is logged in and is on the homepage of the application
    When the user clicks on the clothes button at the bottom of the page
    And the user clicks on the add product to cart button from the clothes page
    And the user clicks on the cart icon to display said item inside of the users cart
    Then the user should be able to view the itme that they clicked in the cart
