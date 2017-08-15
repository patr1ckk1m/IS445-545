# 1. Introduction

For any softrware, if you haven't tested it, it is not done!

There are [four common types of tests](https://guide.meteor.com/testing.html): 

> * Unit test: If you are testing one small module of your application, you are writing a unit test. You’ll need to stub and mock other modules that your module usually leverages in order to isolate each test. You’ll typically also need to spy on actions that the module takes to verify that they occur.
> * Integration test: If you are testing that multiple modules behave properly in concert, you are writing an integration test. Such tests are much more complex and may require running code both on the client and on the server to verify that communication across that divide is working as expected. Typically an integration test will still isolate a part of the entire application and directly verify results in code.
> * Acceptance test: If you want to write a test that can be run against any running version of your app and verifies at the browser level that the right things happen when you push the right buttons, then you are writing an acceptance test (sometimes called “end to end test”). Such tests typically try to hook into the application as little as possible, beyond perhaps setting up the right data to run a test against.
> * Load test: Finally you may wish to test that your application works under typical load or see how much load it can handle before it falls over. This is called a load test or stress test. Such tests can be challenging to set up and typically aren’t run often but are very important for confidence before a big production launch.

Mocha is a JavaScript test framework that can be used for unit test and other tests. 

# 2. Mocha

Mocha is a "simple and fun" JS test framework running on Node.js and in the browser. Mocha supports aysnc and runs tests serially. It has coverage reporting. 

Try a quick demo: 

1) Create a folder , run `npm init`, then ddd mocha as a dev dependency: `npm install --save-dev mocha`. 

2) Create `test/test.js` with the following content: 

  ```
  const assert = require('assert');
  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        assert.equal(-1, [1,2,3].indexOf(4));
      });
    });
  });
  ```

3) Add a test script in `package.json`, then run the test with `npm test`. 

  ```
  "scripts": {
    "test": "mocha"
  }
  ``` 

In the above sample, `assert` is a node.js module that has a set of assertion methods to test invariants. [`Chai`](http://chaijs.com/) is a more powerful BDD (behaivor driven development) assertion library. Use `npm install --save-dev chai` to install it and change the `test/test.js` as the following: 

4) Create `test/test.js` with the following content: 

  ```
  const expect = require('chai').expect;
  describe('Array', function() {
    describe('#indexOf()', function() {
      it('should return -1 when the value is not present', function() {
        expect([1,2,3].indexOf(4)).to.equal(-1);
      });
    });
  });
  ```

The `expect` style is arguably better in the test intention. 

# 3. Test Concepts
To better test a set of software features, method, or functions, it's a good idea to organize tests into so-called `suites`. A suite has a set of related tests. For a non-trivial application, we may need to group a set of suites into another high-level suite, then a set of suites into a high-level suite, and so on so forth. 

## 3.1. Test Suites
In Mocha, the `describe()` method is suite that groups a set of tests or a set of suites. The first parameter is a string that is the suite description message. The second is is a function expression whose body is a set of tests or a set of suites. 

*A side note:  Using arrow functions in Mocha is discouraged because an arrow function is unable to access the Mocha context, i.e., the `this` in an arrown functon uses a lexical binding and is not bound to the Mocha's contex.*

## 3.2. Tests
The `it()` function is an actual test. It takes the same parameters as a suite: a description string and a test function. You can have multiple tests in a suite. You can test multiple things in a test function but it is recommended to test one thing or multiple similar simples things in a test function. 

A test without a test function is reported as a pending test -- a test to be implemented. 

## 3.3. Setup and Teardown Hooks
When you run tests, you may want to setup preconditions such as data preparation or setting enviornment. Use `before(function(){...})` to run tasks before all tests in its block. Use `beforeEach(function(){...})` to run tasks before each test in its block. 

Similarly, use `after(function){...})` to run cleanup/teardown after all tests. Use `after(function(){...})` to run tasks after each test in its block. 

All the hook functions can have an optional description string as its first argument. 

## 3.4. Exclusive Tests and Skip Tests
When you use `describe.only()` or `it.only()`, only those tests are executed and other tests are skiped. They can be used multiple times to inlude all tests that you want to run. 

When you use `describe.skip()` or `it.skip()`, these tests are skipped. 

# 4. BDD Style Assersion
The Chai assertion library has three types of assertions: assert, expect, and should. The `expect` and `should` are so-called behavior driven development that describe the expected behavior of the software under test. 

The general syntax of an `expect` style has three parts: an expression, some chain words and an assertion. 

The expression is the piece of code to be tested. Usually it's a method call and its result (actual value) is to be compared with an expected value or some behavior such as an exception is throwed or not throwed.

The chain words are syntactic sugar used to improve readability. They don't change anything. The words include `to`, `be`, `been`, `is`, `that`, `which`, `and`, `has`, `have`, and etc. 

There are many [BDD assertions](http://chaijs.com/api/bdd/) such as `equal`, `instanceof`, `match`, `throw`, `satisfy`, and etc. 

# 5. A Node.js Test Example

This blog https://ubuverse.com/introduction-to-node-js-api-unit-testing-with-mocha-and-chai/ has an example of testing a simple Node.js application. 


