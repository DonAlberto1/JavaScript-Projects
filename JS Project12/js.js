// document.getElementById("inp").addEventListener("keyup", function (element) {
//     document.getElementById("p").innerHTML=document.getElementById("inp").value.length
// console.log(element)
/* V protivnom sluchae kommentirovat etot kod i snyat drugoy kod*/
// document.getElementById("inp").innerHTML = element.target.value + 
// element.target.value.length
// element.target.style.width = "150px"
// element.target.className = "Ok"
// console.log(element)
// document.getElementById("inp").innerHTML =
//     element.target.value.length
// if (element.code == "ArrowUp") {
//     element.target.className = "ok"
// } else if (element.code == "ArrowDown") {
//     element.target.className = ""
// }

//Atask2
// document.getElementById("inp").innerHTML =
//     element.target.value.length
// if (element.code == toUpperCase()) {
//     element.target.className = "ok"
// } else if (element.code == toLowerCase()) {
//     element.target.className = ""
// }


// })
// document.getElementById("inp").innerHTML=document.getElementById("inp").value.length


//A task2
// document.getElementById("inp").addEventListener("keyup", function (element) {
//     document.getElementById("p").innerHTML=document.getElementById("inp").value.length
//     document.getElementById("inp").innerHTML =
//         element.target.value.length
//     if (element.code == toUpperCase()) {
//         element.target.className = "ok"
//     } else if (element.code == toLowerCase()) {
//         element.target.className = ""
//     }


//     })
//     document.getElementById("inp").innerHTML=document.getElementById("inp").value.length

//A task3
let btn = document.getElementById('Btn');
btn.addEventListener("click", function () {
    let text = document.getElementById('inp').value
    let n = 0
    for (let i = 0; i < text.length; i++) {
        text = text[0].toUpperCase() + text.slice(1)
        if (text[i] === " ") {
            text = text.slice(0, i + 1) + text[i + 1].toUpperCase() + text.slice(i + 1)
        }
    }
    console.log(text)
})



