const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const resultView = document.getElementById("res");

const btnPlus = document.getElementById("add-btn");
const btnMinus = document.getElementById("sub-btn");
const btnMultiply = document.getElementById("mul-btn");
const btnDivide = document.getElementById("div-btn");

function getValues() {
  const v1 = input1.value.trim();
  const v2 = input2.value.trim();

  if (v1 === "" || v2 === "") {
    showError("fill both fields");
    return null;
  }

  const n1 = Number(v1);
  const n2 = Number(v2);

  if (isNaN(n1) || isNaN(n2)) {
    showError("invalid input");
    return null;
  }

  return { n1, n2 };
}

function showError(msg) {
  resultView.textContent = msg;
  resultView.classList.add("err");
}

function showResult(val) {
  resultView.classList.remove("err");
  if (!Number.isInteger(val)) {
    val = Number(val.toFixed(2));
  }
  resultView.textContent = "result: " + val;
}

btnPlus.addEventListener("click", function() {
  const data = getValues();
  if (data) showResult(data.n1 + data.n2);
});

btnMinus.addEventListener("click", function() {
  const data = getValues();
  if (data) showResult(data.n1 - data.n2);
});

btnMultiply.addEventListener("click", function() {
  const data = getValues();
  if (data) showResult(data.n1 * data.n2);
});

btnDivide.addEventListener("click", function() {
  const data = getValues();
  if (!data) return;
  if (data.n2 === 0) {
    showError("zero division error");
    return;
  }
  showResult(data.n1 / data.n2);
});
