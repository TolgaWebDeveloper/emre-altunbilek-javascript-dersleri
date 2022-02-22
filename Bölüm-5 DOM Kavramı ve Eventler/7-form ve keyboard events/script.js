//klavye ve form eventleri

const myForm = document.querySelector("#form")
const isim = document.querySelector("#isim")
const sehirler = document.querySelector("#sehir")

//submit event

//submit işlemi yapıldığında yani dosya gönderildiğinde veya enter'a basıldığında çalışır 
myForm.addEventListener("submit",eventiYakala)

//keydown event

//keydown bir tuşa tıklandığında çalışır
// isim.addEventListener("keydown",eventiYakala)

//keyup event

//keyup bastığımız tuşu bırakınca çalışır
// isim.addEventListener("keyup",eventiYakala)

//keypress event

//keypress bir tuşa bastığımız anda çalışır. keydown gibi
// isim.addEventListener("keypress",eventiYakala)

//focus event

//focus elemanın üstüne tıklandığında çalışır
// isim.addEventListener("focus",eventiYakala)

//blur event

//blur focustan çıkınca çalışır
// isim.addEventListener("blur",eventiYakala)

//cut event

//cut event ctrl+x veya mouse'den kesme işlemi yapıldığında çalışır
// isim.addEventListener("cut",eventiYakala)

//paste event

//paste event yapıştırma işlemi yapıldığında çalışır
// isim.addEventListener("paste",eventiYakala)

//input event

//yukarıdaki işlemlerin hepsi olduğunda çalışır. focus hariç
// isim.addEventListener("input",eventiYakala)

//change event

//change event değer değiştiği zaman çalışır
// sehirler.addEventListener("change",eventiYakala)

function eventiYakala(e) {

    // console.log(isim.value);
    // document.querySelector(".page-title").textContent=isim.value
    console.log(e.target.value);
    console.log("event type : " + e.type);
    
    e.preventDefault() //submit olduğunda sayfayı yenilemesini önledik
}