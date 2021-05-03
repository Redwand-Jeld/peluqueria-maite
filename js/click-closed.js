// click-close solo afecta al close de los card-reveal

var activador = document.querySelectorAll("card-reveal > img")

var q = document.getElementById("b1");
var a = document.getElementById("b2");
var z = document.getElementById("b3");

var w = document.getElementById("b4");
var s = document.getElementById("b5");

;
function clickeo()
{q.click(); a.click(); z.click(); w.click(); s.click();}


q.addEventListener("click", clickeo);
a.addEventListener("click", clickeo);
z.addEventListener("click", clickeo);
w.addEventListener("click", clickeo);
s.addEventListener("click", clickeo);



if (activador.addEventListener("click", clickeo)) {
    clickeo()
}