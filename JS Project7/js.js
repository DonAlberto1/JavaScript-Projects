let arr = ["num1", "num2", "num3", "num4", "num5", "num6", "num7", "num7", "num8", "num9"]
let b = false;
function PushX(element) {
    element.innerHTML = "X"
    b = true;
    setTimeout(Stugum, 1000);
    if (b === true) { setTimeout(ComputerGame, 1000) }
}
function ComputerGame() {
    while (b != false) {
        k = Math.floor(Math.random() * arr.length);
        let inner1 = document.getElementById(arr[k]).innerHTML;
        if (inner1 == "") {
            document.getElementById(arr[k]).innerHTML = "0"
            b = false;
        }
    }
    setTimeout(Stugum, 1000);
}
function Stugum() {
    let items1 = document.getElementById("num1").innerHTML
    let items2 = document.getElementById("num2").innerHTML
    let items3 = document.getElementById("num3").innerHTML
    let items4 = document.getElementById("num4").innerHTML
    let items5 = document.getElementById("num5").innerHTML
    let items6 = document.getElementById("num6").innerHTML
    let items7 = document.getElementById("num7").innerHTML
    let items8 = document.getElementById("num8").innerHTML
    let items9 = document.getElementById("num9").innerHTML

    if (items1 == items2 && items2 == items3 && items1 != "") {
        if (items1 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }

    else if (items4 == items5 && items5 == items6 && items4 != "") {
        if (items4 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }

    else if (items6 == items7 && items7 == items8 && items6 != "") {
        if (items6 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }

    else if (items1 == items4 && items4 == items7 && items1 != "") {
        if (items1 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }
    else if (items2 == items5 && items5 == items8 && items2 != "") {
        if (items2 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }
    else if (items3 == items6 && items6 == items9 && items3 != "") {
        if (items3 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }
    else if (items1 == items5 && items5 == items9 && items1 != "") {
        if (items1 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }


    }
    else if (items3 == items5 && items5 == items7 && items3 != "") {
        if (items3 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }
    else if (items2 == items5 && items5 == items8 && items2 != "") {
        if (items2 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }
    else if (items7 == items8 && items8 == items9 && items7 != "") {
        if (items7 == "X") {
            alert("haxtanak")
        }
        else {
            alert("partutyun")
        }

    }



}