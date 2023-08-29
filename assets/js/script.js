document.addEventListener("DOMContentLoaded", function () {
  //creo i buttons
  classe = "btn btn-primary btn-lg";
  document.querySelector(".btn-group").append(creaButton("+", classe, "+"));
  document.querySelector(".btn-group").append(creaButton("-", classe, "-"));
  document
    .querySelector(".btn-group")
    .append(creaButton("reset", classe, "Reset"));
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

  function creaButton(val, classe, contenuto) {
    let btn = document.createElement("button");
    if (controllaVariabile(classe)) {
      btn.className = classe;
    }
    if (controllaVariabile(val)) {
      btn.setAttribute("value", val);
    }
    if (controllaVariabile(contenuto)) {
      btn.innerHTML = contenuto;
    }
    return btn;
  }

  function controllaVariabile(variable) {
    if (variable !== null && variable !== undefined) {
      return true;
    } else {
      return false;
    }
  }
});
