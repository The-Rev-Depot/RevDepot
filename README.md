# The RevDepot
- A basic E-commerce application that sells Revature's swag and souvenir items including t-shirts, tumbler, pens, post-it, paper, booklets and many others.

## Members:
* Andrew Carr
* Brett Garber
* Carter Wallace
* Deyondre Beale
* Eric Behrensen
* Freddie Tadeolomelin
* Jae Kyoung Lee
* Jesse Lauesen
* John Benson
* Jonathan Alvarado-Gomez
* Justin Johnson
* Kienen Mason
* Kyaw Soe
* Marlon Gregorio
* Metages Firheta
* Mike Keefer
* Najee Mendes
* Nikita Patel 
* Peter Vouvounas
* Roel Crodua
* Ryan Moss
* Santiago Ramirez 
* William Sculley
* Mesfin Tabor
* Rodrigo Arroyo
* Sergio Lopez

## Resource Links:
    (deployed link to website)

## Repositories
* https://github.com/The-Rev-Depot/RevDepot


## Project Parameters
### Users Can:
* Visit the main page directly
* Able to see list of products
* Able to see product description page
* Search for specific product
* Add item to Cart
* Able to do checkout items from Cart
* Register as a new user
    * Receive welcome email
* Login/Logout.

* View number of items inside the cart

### TO-DOs
* Modify their profile information
* Reset their password.
    * Receive email with new password
* Upload picture (using AWS: S3) 
* Add item reviews
* Bookmark the product item
* Add real payment like cash, credit card, paypal, etc.
* Able to see transaction history

## Roles:
(Fill In Member Roles)

## Programs/Libraries used:

### BackEnd:
* Spring Boot
* Hibernate
* Java
* Postgres/H2
* Junit/Mockito
* Javadocs
* Testing - JUnit/Mockito/TDD

### FrontEnd:
* Angular
* TypeScript
* JavaScript
* HTML
* CSS
* Testing - Jasmine/Karma/BDD

### Deployment:
* GCP
* Docker
* Jenkins

## Backend Requirements
### Backend endpoints 

|   Action        	|             Endpoint                	|
|   ------        	|             --------                	|
| Get All User		|	GET /revdepot/user		|
| Create User		|	POST /revdepot/user		|
| Login User		|	POST /revdepot/login		|
| Get User by Id	|	GET /revdepot/user/{id}		|
| Get User by Username	|	GET /revdepot/user/username/{username}	|
| Get User by Email	|	GET /revdepot/user/email/{email}	|
| Get Deals		|	GET /product/deals		|
| Get Category		|	GET /product/deals/category	|
| Get All Products	|	GET /product/view		|
| Update Inventory	|	POST /inventory/update		|
| Get Items		|	GET /inventory/items		|
| Update Cart		|	PUT /cart/update		|
| Add to Cart		|	POST /cart/add			|
| Get Cart by UserId	|	GET /cart/user/{id}		|


## Models (Non-finished list)
### User Model
```
    Integer userId: serial
    String firstName not null
    String lastName not null
    String username Unique not null
    String password not null
    String email Unique not null
    String aboutMe 
    Date birthday 
    String urlProPic
```
### Response Model
```
   Boolean success
   String message
   Object data
```
### Transaction Model
```
    Integer transactionId
    Date transactionDate
    Double cost
    User user
    Set<Item> items
```
### Product Model
```
    Integer productId: serial
    String productName
    String productDescription
    String picUrl
    Double productPrice
    Float productRating
    String productCategory
    Integer saleId
```
### Item Model
```
    Integer itemId
    Integer quantity
    Product product
```
### Inventory Model
```
    Integer inventoryId
    Product product
    Integer quantity
```
### Cart Model
```
    Integer cartId
    User user
    Set<Item> items
```
