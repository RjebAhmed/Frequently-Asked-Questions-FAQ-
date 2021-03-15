var Q = document.querySelectorAll(".Q");
var D = document.querySelectorAll(".D");
var I = document.querySelectorAll(".myIcone");

console.log(D);
console.log(Q);
for (let i = 0; i < Q.length; i++) {
  Q[i].addEventListener("click", function () {
    if (getComputedStyle(D[i], null).display == "flex") {
      D[i].style.display = "none";
      I[i].style.transform = "rotate(90deg)";

    } else {
      for (let j = 0; j < D.length; j++) {
        if (getComputedStyle(D[j], null).display == "flex") {
          D[j].style.display = "none";
          I[j].style.transform = "rotate(90deg)";
        }
      }
      D[i].style.display = "flex";
      I[i].style.transform = "rotate(45deg)";
    }
  });
}

