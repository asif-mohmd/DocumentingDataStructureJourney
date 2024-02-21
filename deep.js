const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

const compose = (...functions) => {
    return (input) => {
      return functions.reduceRight((acc, fn) => {
        return fn(acc);
      }, input);
    };
  };

const composedFunction = compose(subtract10, multiplyBy3, add5);
const result = composedFunction(7);

console.log(result);

