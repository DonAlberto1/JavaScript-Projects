let a = document.querySelector("#name");
let b = document.querySelector("#text")

function name111() {


    if (a.value[0] == a.value[0].toUpperCase()) {
        b.innerHTML = ""

    }
    else {

        b.innerHTML = b.innerHTML + "<br>" + "Первая буква должна быть заглавной"

    }
    if (a.value.length < 3) {
        b.innerHTML = b.innerHTML + "<br>" + "Мало букв"
    }

    if (a.value.length > 10) {
        b.innerHTML = b.innerHTML + "<br>" + "Много букв"
    }
}