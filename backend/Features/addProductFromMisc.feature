Feature: add product to the cart from the misc page

  Scenario: a user should be able to add a product to the cart from the misc page
    Given That a user is logged in and is navigated to the home page
    When the user clicks on the misc button at the bottom of the page
    And the user clicks on the button to add a product to the cart from the misc page
    And the user clicks on the cart icon to display the items that are currently in the cart
    Then the user should be able to view the item that they clicked upon from themisc page in the cart page
