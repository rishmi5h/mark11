const birthday = document.querySelector("#birthday");
const luckyNo = document.querySelector("#luckyNo");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");
const luckyimg = document.querySelector(".lucky");
const unlucky = document.querySelector(".unlucky");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerHTML = "lucky af";
    luckyimg.classList.remove("hide");
    unlucky.classList.add("hide");
  } else {
    unlucky.classList.remove("hide");
    luckyimg.classList.add("hide");
    output.innerHTML = "Unlucky babu";
  }
}

function checkIfLucky() {
  const date = birthday.value;
  const sum = calculateSum(date);
  const lucky = luckyNo.value;
  if (sum && date) {
    compareValues(sum, lucky);
  } else {
    output.innerHTML = "Please enter values vrooo";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i in dob) {
    sum = sum + parseInt(dob.charAt(i));
  }
  return sum;
}

btn.addEventListener("click", () => checkIfLucky());
