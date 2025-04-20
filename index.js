let input = document.querySelector("input");

function inValue(element) {
  input.value += element;
}

function cButton() {
  input.value = "";
}

function delButton() {
  input.value = input.value.slice(0, -1);
}

function evalEq() {
  let exp = input.value.replace(/x/g, "*");
  input.value = eval(exp);
}

document.addEventListener("keydown", function (e) {
  let key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    // If it's a number or operator
    input.value += key;
  } else if (key === "Enter") {
    evalEq(); // call your evaluation function
  } else if (key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (key === "c" || key === "C") {
    input.value = "";
  } else if (key.toLowerCase() === "x") {
    input.value += "x"; // you can later convert 'x' to '*'
  }
});
