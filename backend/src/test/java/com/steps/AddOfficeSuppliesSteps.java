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

public class AddOfficeSuppliesSteps {
	
	WebDriver driver;
	JavascriptExecutor js;
	
	@Given("that a user is logged in and on the home page")
	public void that_a_user_is_logged_in_and_on_the_home_page() {
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
	
	@When("the user clicks the office supplies button")
	public void the_user_clicks_the_office_supplies_button() {
	    WebElement ele = driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-display-products/div[3]/div[4]/div[2]/a/div/button/span[1]"));
	    driver.manage().timeouts().implicitlyWait(5,TimeUnit.SECONDS);

	    js.executeScript("arguments[0].click()", ele);
	}
	
	@When("clicks on the add product button of an office supllies product")
	public void clicks_on_the_add_product_button_of_an_office_supllies_product() {
	    driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
	    driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-result-page/div/div[2]/mat-card[1]/app-quantity-select/div/div/button")).click();
	}
	
	@When("the user clicks on the cart icon")
	public void the_user_clicks_on_the_cart_icon() {
	    driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-toolbar/div/div/button[1]/span[1]/mat-icon")).click();
	    driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);

	}
	
	@Then("the user should see the office supply product in their cart")
	public void the_user_should_see_the_office_supply_product_in_their_cart() {
		driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
	    WebElement words = driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav/div/div/div[1]/app-cart-card/mat-card/mat-card-title"));
	    String text = words.getText();
	    assertTrue(words.isDisplayed());
	    assertEquals("Water Bottle", text);
	    
	    driver.close();
	    driver.quit();
	}

}
