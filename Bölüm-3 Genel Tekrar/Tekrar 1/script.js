// soru 1 : klavyeden girilen 3 sayının ortalamasını veriniz

// let birinciSayı = parseInt(prompt("1.sayıyı giriniz"));
// let ikinciSayı = parseInt(prompt("2.sayıyı giriniz"));
// let ücüncüSayı = parseInt(prompt("3.sayıyı giriniz"));

// let ortalamaSayı = (birinciSayı+ikinciSayı+ücüncüSayı) / 3

// alert("Girdiğiniz sayıların ortalaması :" + parseInt(ortalamaSayı))

// soru 2 : klavyeden kenarları girilen bir üçgenin çeşidini giriniz

// let birinciKenar = parseInt(prompt("1. kenarı giriniz"));
// let ikinciKenar = parseInt(prompt("2. kenarı giriniz"));
// let ücüncüKenar = parseInt(prompt("3. kenarı giriniz"));

// if (birinciKenar == ikinciKenar && birinciKenar == ücüncüKenar){
//     alert("Bu bir eşkenar üçgendir")
// }
// else if (birinciKenar != ikinciKenar && birinciKenar != ücüncüKenar && ikinciKenar != ücüncüKenar){
//     alert("bu bir çeşitkenar üçgendir")
// }
// else if (birinciKenar == ikinciKenar && birinciKenar != ücüncüKenar && ikinciKenar != ücüncüKenar){
//     alert("bu bir ikizkenar üçgendir")
// }
// else{
//     alert("bu bir dikaçı üçgendir")
// }

// soru 3 : klavyeden girilen vize ve final notlarına göre öğrencilerin dersi geçip geçmediğini söyleyen bir uygulama yazınız. (Geçme notu : 50, vizenin %40'ı, finalin %60'ı geçerlidir)

let vizeNotu = parseInt(prompt("vize notu giriniz"));
let finalNotu = parseInt(prompt("final notu giriniz"));

let ortalama = vizeNotu * 0.4 + finalNotu * 0.6;

if (ortalama >= 50) {
    alert("tebrikler dersi geçtiniz. ortalamanız: "+ortalama)
}
else{
    alert("maalesef dersten kaldınız. ortalamanız: "+ortalama)
}
