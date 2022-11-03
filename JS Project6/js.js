//let r=document.querySelector("#p")
//r.style.backgroundColor="red";
const para = document.createElement("p");
para.innerHTML = "This is a paragraph";
document.getElementById("myDIV").appendChild(para);
function fun() { document.getElementById("text1").innerHTML = "Hello JavaScript"; }
const element = document.getElementById("myBtn");
element.addEventListener("click", function () { document.getElementById("demo").innerHTML = "Hello World"; })
function fun() {
    let img = document.getElementById("but3")
    if (img.src === 'https://www.w3schools.com/js/pic_bulboff.gif') { img.src = 'https://www.w3schools.com/js/pic_bulbon.gif' } else { img.src = 'https://www.w3schools.com/js/pic_bulboff.gif' }
}

let tiv = true;
let img = document.getElementById("but3")
function fun() {
    if (tiv === false) {
        img.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
        tiv = true
    }
    else {
        img.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
        tiv = false
    }
}