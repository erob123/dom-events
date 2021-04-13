var button;
var clickAlert = function () {
  alert("SOMEONE CLICKED THE BUTTON!!");
};

var clickCount = 0;
var clickIncrement = function (event) {
  console.log(event);

  console.log(event.target.textContent);
  event.target.innerHTML = `Button ${++clickCount}`;
};

document.addEventListener("DOMContentLoaded", () => {
  
  //bubble vs. capture: change "true" to "false" and the event will fire on bubble
  window.addEventListener("click", function () {
    alert("You clicked on the page!");
  }, true);

  button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    clickAlert();
    clickIncrement(event);
    button.removeEventListener("click", clickAlert);
  });
});
