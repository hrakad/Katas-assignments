const reverseStr = function (inputStr) {
  word = "";

  for (let i = inputStr.length - 1; i >= 0; i--) {
    word += inputStr[i];
  }
  console.log(word);
}

let args = process.argv.slice(2);

for (let iter = 0; iter < args.length; iter++) {
  reverseStr(args[iter]);
}