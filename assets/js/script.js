document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".btn-group").onclick = counterClickCheck;

  function aumentaCounter(i) {
    return ++i;
  }
  function diminuisciCounter(i) {
    return --i;
  }
  function azzeraCounter() {
    return 0;
  }
  function modificacounter(i, newValue) {
    i.textContent = newValue;
  }

  function counterClickCheck(event) {
    let i = document.querySelector(".counter");
    let newValue;
    switch (event.target.value) {
      case "+":
        newValue = aumentaCounter(Number(i.textContent));
        break;
      case "-":
        newValue = diminuisciCounter(Number(i.textContent));
        break;
      default:
        newValue = azzeraCounter();
    }
    modificacounter(i, newValue);
  }
});
