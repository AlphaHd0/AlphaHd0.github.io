var pressedEquals = "false"
var islem = "wtf"
var firstNum = "wtf"
var secondNum = "wtf"

function myFunc(clicked_id, clicked_class) {
    var sonuc = document.getElementById("sonuc")
    console.log(clicked_id, "- ID")
    console.log(clicked_class, "- CLASS")

    if (clicked_class == "num") {
        if (sonuc.innerHTML != "0") {sonuc.innerHTML = sonuc.innerHTML + clicked_id}
        if (sonuc.innerHTML == "0") {sonuc.innerHTML = clicked_id}
    }
    if (clicked_class == "ops") {
        if (clicked_id == "toplama") {
            firstNum = sonuc.innerHTML
            islem = "toplama"
            pressedEquals = "false"
            sonuc.innerHTML = "0"
        }
        if (clicked_id == "esittir") {
            secondNum = sonuc.innerHTML
            pressedEquals = "true"
        }
        if (islem = "toplama") {
            if (pressedEquals == "true") {
                toplamSonuc = Number(firstNum) + Number(secondNum)
                sonuc.innerHTML = "= " + toplamSonuc
            }
        }
        if (clicked_id == "removeNum") {
            sonuc.innerHTML = "0"
            islem = "nil"
            firstNum = "nil"
            secondNum = "nil"
        }
    }
}
