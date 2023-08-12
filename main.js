let bill = document.getElementById("bill");
let peopleNum = document.getElementById("people")
let resetBtn = document.getElementById("reset")
let tipSpans = document.querySelectorAll(".options span")
let custom = document.getElementById("custom");
let total = '$0,00'
let SpanPercent;

let tip ;

function spanValue (value){
  tipSpans.forEach((span)=>{
    if(span.dataset.percent == value){
      span.classList.add("active")
    }else {
      span.classList.remove("active")
    }
  })
  tip = parseInt(value) / 100;

  yoyo()
}


bill.onkeyup = function(){
if (bill.value !=""){
  resetBtn.classList.add("value")
  yoyo()
}else {
  resetBtn.classList.remove("value")

  document.querySelector(".total-result").innerHTML = "$0.00";
document.querySelector(".person-result").innerHTML =  "$0.00";
}
}

custom.oninput = function (){
  tip = custom.value / 100
  yoyo()
}

peopleNum.oninput = yoyo;


function yoyo(e){

if(peopleNum.value >0){
  if (tip == undefined){
    tip = 0
  }
  let total = (+bill.value + (+bill.value * +tip)) / +peopleNum.value;
  document.querySelector(".total-result").innerHTML = `\$${total.toFixed(2)}`;

  let tipAmount = (+bill.value * +tip) / +peopleNum.value
  document.querySelector(".person-result").innerHTML = `\$${tipAmount.toFixed(2)}`;
}
}
// (+bill.value + (+bill.value * +tip))/peopleNum.value;

resetBtn.onclick = function(){
  bill.value ="";
  tipSpans.forEach((span)=>{
    span.classList.remove("active")
  })
  custom.value ="";
  peopleNum.value = 1;
    document.querySelector(".person-result").innerHTML = `\$0,00`;
  document.querySelector(".total-result").innerHTML = `\$0,00`;
}
