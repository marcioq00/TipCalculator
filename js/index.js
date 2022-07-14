const percentBtn = document.querySelectorAll(".tips__percent__btn");
const btn = document.querySelector(".btn");
const btnReset = document.querySelector(".main__result__btn--primary");
const otherInputPercent = document.querySelector(".tips__percent__input");
const peopleListener = document.querySelector("#people");
const moneyListener = document.querySelector("#money");
let userMoney = 1;
let tipValue = 0.15;
let peopleCount = 1;

let money = () => {
  const money = document.querySelector("#money");
  userMoney = Number(money.value);
  calculation();
  return userMoney;
};

let handleClick = (event) => {
  percentBtn.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });
  calculation();
};

let otherInput = () => {
  tipValue = Number("0." + otherInputPercent.value);
  calculation();
};

let people = () => {
  peopleCount = Number(peopleListener.value);
  calculation();
  return peopleCount;
};

let calculation = () => {
  if (peopleCount <= 0) {
    document
      .querySelector("#people")
      .setAttribute("style", "border: 2px solid tomato;");
    document.querySelector(
      ".main__calculations__people--paragraph2"
    ).innerHTML = "Can't be zero";
  } else {
    document
      .querySelector("#people")
      .removeAttribute("style", "border: 2px solid red;");
    document.querySelector(
      ".main__calculations__people--paragraph2"
    ).innerHTML = "";
    let tipAmount = (userMoney * tipValue) / peopleCount;
    let total = (userMoney * (1 + tipValue)) / peopleCount;
    document.querySelector("#tip__amount").innerHTML =
      "$" + tipAmount.toFixed(2);
    document.querySelector("#total__tip").innerHTML = "$" + total.toFixed(2);
  }
};

let reset = () => {
  document.querySelector("#total__tip").innerHTML = "$0.00";
  document.querySelector("#tip__amount").innerHTML = "$0.00";
  moneyListener.value = "0";
  peopleListener.value = "1";
  otherInputPercent.value = "";
};

percentBtn.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

otherInputPercent.addEventListener("input", otherInput);
moneyListener.addEventListener("input", money);
peopleListener.addEventListener("input", people);
btnReset.addEventListener("click", reset);
