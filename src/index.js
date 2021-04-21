import "./styles.css";

//Declare variables
let inp = document.getElementById("inp");
let result = document.getElementById("result");
let btn = document.getElementById("btn");
let counter = 0;

//Actual function implemented by event listener
let func = () => {
  let para = document.createElement("p");
  para.innerHTML = counter++;
  result.appendChild(para);
};

//debouncing function
let betterFunc = (funcParam, delay) => {
  let timeoutId;
  return function (...args2) {
    let context = this;
    let args = arguments;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      funcParam.apply(context, args);
    }, delay);
  };
};

//Listen for event in the text input field
inp.addEventListener("keyup", betterFunc(func, 2000));

//Listen for button click, this clears result field
btn.addEventListener("click", () => {
  result.innerHTML = "";
});
