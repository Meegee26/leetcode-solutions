//30-Day JavaScript Challenge
//https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript

var expect = function (val) {
  function toBe(num) {
    if (val === num) {
      return true;
    } else {
      throw "Not Equal";
    }
  }

  function notToBe(num) {
    if (val !== num) {
      return true;
    } else {
      throw "Equal";
    }
  }

  return { toBe, notToBe };
};
