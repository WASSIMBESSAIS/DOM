var plus_buttons = document.querySelectorAll(".plus");
var minus_buttons = document.querySelectorAll(".minus");
var total = document.getElementById("total");
var prices = document.querySelectorAll(".price");
var like_btns = document.querySelectorAll(".like");
var delet_btns = document.querySelectorAll(".delete");

function deleteRow(e) {
  var cible = e.target;
  var tr = cible.parentElement.parentElement.parentElement.parentElement;
  console.log(tr);
  var price = tr.querySelector(".price");
  price.innerHTML = 0;
  tr.remove();
  sum();
}

function changeColor(e) {
  var cible = e.target;
  if (cible.style.color !== "red") {
    cible.style.color = "red";
  } else {
    cible.style.color = "gray";
  }
}

function sum() {
  var somme = 0;
  for (let i = 0; i < prices.length; i++) {
    somme += Number(prices[i].innerHTML);
    total.innerHTML = somme;
  }
}

function inc(e) {
  var clickedbutton = e.target;
  var buttonparent = clickedbutton.parentElement;
  var paragraph = buttonparent.querySelector("p");
  var value = Number(paragraph.innerHTML);
  value++;
  paragraph.innerHTML = value;
  //price
  var tr = buttonparent.parentElement.parentElement;
  var unit_Price = tr.querySelector(".unitPrice");
  var unit_Price1 = Number(unit_Price.innerHTML);
  var price = tr.querySelector(".price");
  price.innerHTML = value * unit_Price1;
  sum();
}
for (let i = 0; i < plus_buttons.length; i++) {
  plus_buttons[i].addEventListener("click", inc);
}

function dec(e) {
  var clickedbutton = e.target;
  var buttonparent = clickedbutton.parentElement;
  var paragraph = buttonparent.querySelector("p");
  var value = Number(paragraph.innerHTML);
  if (value > 0) {
    value--;
  }
  paragraph.innerHTML = value;
  var tr = buttonparent.parentElement.parentElement;
  var unit_Price = tr.querySelector(".unitPrice");
  var unit_Price1 = Number(unit_Price.innerHTML);
  var price = tr.querySelector(".price");
  price.innerHTML = value * unit_Price1;
  sum();
}
for (let i = 0; i < minus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", dec);
}

for (let i = 0; i < like_btns.length; i++) {
  like_btns[i].addEventListener("click", changeColor);
}
for (let i = 0; i < delet_btns.length; i++) {
  delet_btns[i].addEventListener("click", deleteRow);
}