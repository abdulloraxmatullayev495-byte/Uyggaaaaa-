
let son = 0;

let number = document.getElementById("number");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");

plus.addEventListener("click", function() {
    son++;
    number.innerHTML = son;
});

minus.addEventListener("click", function() {
    son--;
    number.innerHTML = son;
});
