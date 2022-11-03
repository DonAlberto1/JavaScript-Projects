let sp1 = document.querySelector("#sp1")
let sp2 = document.querySelector("#sp2")
let sp3 = document.querySelector("#sp3")
let sp4 = document.querySelector("#sp4")

let q1 = document.querySelector("#mek")
let q2 = document.querySelector("#erku")
let q3 = document.querySelector("#ereq")
let q4 = document.querySelector("#chors")
let q5 = document.querySelector("#hing")
let q6 = document.querySelector("#vec")
let q7 = document.querySelector("#yot")
let q8 = document.querySelector("#ut")
sp1.addEventListener("click", function () {
    sp1.className = "col1"
    sp2.className = "col2"
    sp3.className = "col2"
    sp4.className = "col2"
    q1.style =
        "transform:scale(1);transition:.4s"
    q2.style =
        "transform:scale(1);transition:.4s"
    q3.style =
        "transform:scale(1);transition:.4s"
    q4.style =
        "transform:scale(1);transition:.4s"
    q5.style =
        "transform:scale(1);transition:.4s"
    q6.style =
        "transform:scale(1);transition:.4s"
    q7.style =
        "transform:scale(1);transition:.4s"
    q8.style =
        "transform:scale(1);transition:.4s"
})
sp2.addEventListener("click", function () {
    sp1.className = "col2"
    sp2.className = "col1"
    sp3.className = "col2"
    sp4.className = "col2"
    q1.style =
        "transform:scale(0,1);transition:.4s;"
    q5.style =
        "transform:scale(0,1);transition:.4s;"
    q6.style =
        "transform:scale(0,1);transition:.4s;"
    q8.style =
        "transform:scale(0,1);transition:.4s;"
    q2.style =
        "transform:translate(-240px, 0);transition:.4s"
    q3.style =
        "transform:translate(-240px, 0);transition:.4s"
    q4.style =
        "transform:translate(-240px, 0);transition:.4s"
    q7.style =
        "transform:translate(340px, -380px);transition:.4s"

})
sp3.addEventListener("click", function () {
    sp1.className = "col2"
    sp2.className = "col2"
    sp3.className = "col1"
    sp4.className = "col2"
    q1.style =
        "transform:translate(0px,-380px),transition:.4s"
    q6.style =
        "transform:translate(0, -380px);transition:.4s"
    q2.style =
        "transform:scale(0,1);transition:.4s;"
    q3.style =
        "transform:scale(0,1);transition:.4s;"
    q4.style =
        "transform:scale(0,1);transition:.4s;"
    q5.style =
        "transform:scale(0,1);transition:.4s;"
    q7.style =
        "transform:scale(0,1);transition:.4s;"
    q8.style =
        "transform:scale(0,1);transition:.4s;"


})
sp4.addEventListener("click", function () {
    sp1.className = "col2"
    sp2.className = "col2"
    sp3.className = "col2"
    sp4.className = "col1"
    q5.style =
        "transform:translate(0, -380px);transition:.4s"
    q8.style =
        "transform:translate(-480px, -380px);transition:.4s"
    q1.style =
        "transform:scale(0,1);transition:.4s;"
    q2.style =
        "transform:scale(0,1);transition:.4s;"
    q3.style =
        "transform:scale(0,1);transition:.4s;"
    q4.style =
        "transform:scale(0,1);transition:.4s;"
    q6.style =
        "transform:scale(0,1);transition:.4s;"
    q7.style =
        "transform:scale(0,1);transition:.4s;"

})