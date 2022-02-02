package com.steps;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AddProductFromClothesSteps {
	
	WebDriver driver;
	JavascriptExecutor js;
	
	@Given("that a user is logged in and is on the homepage of the application")
	public void that_a_user_is_logged_in_and_is_on_the_homepage_of_the_application() {
		WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    js = (JavascriptExecutor) driver;
	    driver.manage().window().maximize();
	    driver.navigate().to("http://localhost:4200/");
	    driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-toolbar/button/span[1]")).click();
	    driver.findElement(By.id("username")).sendKeys("User1");
	    driver.findElement(By.id("password")).sendKeys("12345");
	    driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-login/div/form/div[3]/button")).click();
	}
	
	@When("the user clicks on the clothes button at the bottom of the page")
	public void the_user_clicks_on_the_clothes_button_at_the_bottom_of_the_page() {
		WebElement ele = driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-display-products/div[3]/div[4]/div[4]/a/div/button"));
	    driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);
	    js.executeScript("arguments[0].click()", ele);
	}
	
	@When("the user clicks on the add product to cart button from the clothes page")
	public void the_user_clicks_on_the_add_product_to_cart_button_from_the_clothes_page() {
		driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
		driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-result-page/div/div[3]/mat-card[3]/app-quantity-select/div/div/button")).click();
	}
	
	@When("the user clicks on the cart icon to display said item inside of the users cart")
	public void the_user_clicks_on_the_cart_icon_to_display_said_item_inside_of_the_users_cart() {
		driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-toolbar/div/div/button[1]")).click();
	    driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
	}
	
	@Then("the user should be able to view the itme that they clicked in the cart")
	public void the_user_should_be_able_to_view_the_itme_that_they_clicked_in_the_cart() {
		driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);

		WebElement words = driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav/div/div/div[1]/app-cart-card/mat-card/mat-card-title"));
	    String text = words.getText();
	    
	    assertTrue(words.isDisplayed());
	    assertEquals("red t-shirt", text);
		
		driver.close();
	    driver.quit();
	}


}
