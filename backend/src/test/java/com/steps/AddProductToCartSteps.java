package com.steps;

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

public class AddProductToCartSteps {
	
	WebDriver driver;
	JavascriptExecutor js;
	
	@Given("that the user is logged in")
	public void that_the_user_is_logged_in() {
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

	@When("the user clicks on the add to cart button")
	public void the_user_clicks_on_the_add_to_cart_button() {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	    WebElement ele = driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-display-products/div[2]/app-sales-deals/div[2]/div[2]/mat-card/mat-card-actions/app-quantity-select/div/div/button/mat-icon"));
	    js.executeScript("arguments[0].click();", ele);
	}

	@When("opens the side cart panel")
	public void opens_the_side_cart_panel() {
	    driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-toolbar/div/div/button[1]/span[1]/mat-icon")).click();
	    driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
	}

	@Then("the user should see the item added into their cart.")
	public void the_user_should_see_the_item_added_into_their_cart() throws Exception {
		
	    assertTrue(driver.findElement(By.id("checkoutBTN")).isDisplayed());
	    driver.close();
	    driver.quit();
	}

}
