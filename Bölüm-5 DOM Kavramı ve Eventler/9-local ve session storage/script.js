//local ve session storage

// çoğunlukla kullanıcıdan alınan verileri veya kendi verilerimizi tarayıcı üzerinde saklamak isteriz. bunun için local ve session storage kullanırız

//Local Storage

//local storage verilerimizi tarayıcı kapansa bile saklar

//set item ile verilerimizi gireriz. soldaki değer anahtar kelime, sağdaki ise anahtar kelimeye atanacak değer
localStorage.setItem("isim","tolga")
localStorage.setItem("yas","18")

//get item ile girdiğimiz verileri anahtar kelimesi ile çağırırız
console.log(localStorage.getItem("isim"));

//remove item ile seçtiğimiz veriyi sileriz
// localStorage.removeItem("yas")

//clear ile storage üzerindeki tüm verileri sileriz
// localStorage.clear()

//Session Storage

//Session storage ise verilerimizi tarayıcı açık olduğu sürece saklar

sessionStorage.setItem("sehir","gaziantep")

//form üzerinden aldığımız veriyi localStorage üzerinde kaydedelim

const ulListesi = document.querySelector(".liste")
const isimDizisi = JSON.parse(localStorage.getItem("isimListesi"))

isimDizisi.forEach(isim => {
    const yeniLi = document.createElement("li")
    yeniLi.textContent = isim;
    ulListesi.appendChild(yeniLi)
});

document.querySelector("#form").addEventListener("submit", e =>{
    const yeniİsim = document.querySelector(".isim").value
    let isimDizisi;
    
    if(localStorage.getItem("isimListesi") === null){
        isimDizisi = []
    }else{
        // local ve session storage sadece JSON veri tipi yani string olarak veri alırlar. json parse ile ile JSON bir ifadeyi JS objesine çeviririz. burda kullanmamızın amacı dizimizi stirng olarak değilde bir obje olarak almasını sağlamak. yani birden fazla veri yazmak istediğimizde eski verinin üstüne yazması yerine yanına eklemesi için kullandık
        isimDizisi = JSON.parse(localStorage.getItem("isimListesi"))
    }

    isimDizisi.push(yeniİsim)

    // storage'nin JSON'dan başka değer almadığını belirtmiştik. burda ise veri olarak eklememiz için dizimizi JSON'a çevirdik 
    localStorage.setItem("isimListesi",JSON.stringify(isimDizisi))

    const yeniLi = document.createElement("li")
    yeniLi.textContent = yeniİsim;
    ulListesi.appendChild(yeniLi)

    e.preventDefault()
})
