const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft > 0) {
    reader.question("Gimme a number", (response) => {
      console.log(numsLeft, "numsLeft");
      sum += parseInt(response);
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
};

addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));
