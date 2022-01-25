package com.steps;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LogoSteps {
	
	public static WebDriver driver;
	
	@Given("a user is on a webpage")
	public void a_user_is_on_a_webpage() {
	    WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.navigate().to("http://localhost:4200/");
	    driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-toolbar/button/span[1]")).click();
	}

	@Given("the user enters correct credentials")
	public void the_user_enters_correct_credentials() {
	    driver.findElement(By.id("username")).sendKeys("User1");
	    driver.findElement(By.id("password")).sendKeys("12345");
	   
	}

	@When("user clicks enter")
	public void user_clicks_enter() {
		driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-sidenav-container/mat-sidenav-content/app-login/div/form/div[3]/button")).click();
	}

	@Then("the user is nav to the home page")
	public void the_user_is_nav_to_the_home_page() {
		assertTrue(driver.findElement(By.xpath("/html/body/app-root/app-navbar/mat-toolbar/div/div/button[2]/span[1]")).isDisplayed());
		driver.close();
		driver.quit();
	}

}
