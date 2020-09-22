const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let body = document.findElementByTagName("body");
  body.addEventListener("keydown", function(e){
    console.log(e.key);
  });
}

let index = 0;
