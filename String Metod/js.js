document.getElementById("inp").addEventListener("keyup", function (element) {
    //     document.getElementById("p").innerHTML=document.getElementById("inp").value.length
    // console.log(element)
    /* V protivnom sluchae kommentirovat etot kod i snyat drugoy kod*/
    // document.getElementById("inp").innerHTML = element.target.value + 
    // element.target.value.length
    // element.target.style.width = "150px"
    // element.target.className = "Ok"
    // console.log(element)
    document.getElementById("inp").innerHTML =
        element.target.value.length
    if (element.code == "ArrowUp") {
        element.target.className = "ok"
    } else if (element.code == "ArrowDown") {
        element.target.className = ""
    }

})
//document.getElementById("inp").innerHTML=document.getElementById("inp").value.length