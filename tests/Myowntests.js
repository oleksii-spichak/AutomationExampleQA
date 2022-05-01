const { Builder, By, Key } = require("selenium-webdriver");
const { Driver } = require("selenium-webdriver/chrome");
// Assertions
var should = require("chai").should();

// Test itself below:
async function moOwnTest() {
  // 1 Launch the browser

  let mydriver = await new Builder().forBrowser("firefox").build();
  // Navigate to :
  await mydriver.get("https://lambdatest.github.io/sample-todo-app/");

  // 3. Add a todo list item
  await mydriver
    .findElement(By.id("sampletodotext"))
    .sendKeys("AutomationJSisCool", Key.RETURN);

  // Assertions that all 5 items is presented initially

  let todolistitem1 = await mydriver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[1]"))
    .getText()
    .then(function (textvalue1) {
      return textvalue1;
    });
  todolistitem1.should.equal("First Item");
  //
  let todolistitem2 = await mydriver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[2]"))
    .getText()
    .then(function (textvalue2) {
      return textvalue2;
    });
  todolistitem2.should.equal("Second Item");
  //
  let todolistitem3 = await mydriver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[3]"))
    .getText()
    .then(function (textvalue3) {
      return textvalue3;
    });
  todolistitem3.should.equal("Third Item");
  //
  let todolistitem4 = await mydriver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[4]"))
    .getText()
    .then(function (textvalue4) {
      return textvalue4;
    });
  todolistitem4.should.equal("Fourth Item");
  //
  let todolistitem5 = await mydriver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[5]"))
    .getText()
    .then(function (textvalue5) {
      return textvalue5;
    });
  todolistitem5.should.equal("Fifth Item");
  //
  let addedtodolistitem6 = await mydriver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[6]"))
    .getText()
    .then(function (textvalue6) {
      return textvalue6;
    });
  addedtodolistitem6.should.equal("AutomationJSisCool");

  //await mydriver.quit();
}
moOwnTest();
