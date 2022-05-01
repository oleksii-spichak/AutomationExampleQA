const { Builder, By, Key } = require("selenium-webdriver");
//  Assertions
//const assert = require("assert");
//  Chai assertions
var should = require("chai").should();
// Mocha FrameWork integration:
// 1. Describe block
describe("Add another todo tests ", function () {
  // it block

  it("successfully adds  another todo to application", async function () {
    // 1. launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    // 2. Navigate to test location (https://lambdatest.github.io/sample-todo-app/)
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // 3. Add a todo list item
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("OleksiiAutomation", Key.RETURN);

    // Assertions

    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (textvalue) {
        return textvalue;
      });

    let todoText2 = await driver
      .findElement(By.xpath("/html/body/div/div/div/ul/li[1]"))
      .getText()
      .then(function (textvalue2) {
        return textvalue2;
      });

    //  Asset using node.js

    //   assert.strictEqual(todoText, "OleksiiAutomation");

    // assert using chai (should)
    todoText2.should.equal("First Item");
    todoText.should.equal("OleksiiAutomation");

    // 4. Close the browser
    await driver.quit();
  });

  // New failer test:

  it("Adding nw test for reporting", async function () {
    // 1. launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    // 2. Navigate to test location (https://lambdatest.github.io/sample-todo-app/)
    await driver.get("https://lambdatest.github.io/sample-todo-app/");

    // 3. Add a todo list item
    await driver
      .findElement(By.id("sampletodotext"))
      .sendKeys("OleksiiAutomation", Key.RETURN);

    // Assertions

    let todoText = await driver
      .findElement(By.xpath("//li[last()]"))
      .getText()
      .then(function (textvalue) {
        return textvalue;
      });

    let todoText2 = await driver
      .findElement(By.xpath("/html/body/div/div/div/ul/li[1]"))
      .getText()
      .then(function (textvalue2) {
        return textvalue2;
      });

    //  Asset using node.js

    //   assert.strictEqual(todoText, "OleksiiAutomation");

    // assert using chai (should)
    todoText2.should.equal("Second Item");
    todoText.should.equal("OleksiiAutomation");

    // 4. Close the browser
    await driver.quit();
  });
});

async function testExample() {
  // 1. launch the browser
  let driver = await new Builder().forBrowser("firefox").build();

  // 2. Navigate to test location (https://lambdatest.github.io/sample-todo-app/)
  await driver.get("https://lambdatest.github.io/sample-todo-app/");

  // 3. Add a todo list item
  await driver
    .findElement(By.id("sampletodotext"))
    .sendKeys("OleksiiAutomation", Key.RETURN);

  // Assertions

  let todoText = await driver
    .findElement(By.xpath("//li[last()]"))
    .getText()
    .then(function (textvalue) {
      return textvalue;
    });

  let todoText2 = await driver
    .findElement(By.xpath("/html/body/div/div/div/ul/li[1]"))
    .getText()
    .then(function (textvalue2) {
      return textvalue2;
    });

  //  Asset using node.js

  //   assert.strictEqual(todoText, "OleksiiAutomation");

  // assert using chai (should)

  todoText.should.equal("OleksiiAutomation");
  todoText2.should.equal("First Item");

  // 4. Close the browser
  await driver.quit();
}
testExample();
