// tek eleman seçiciler

/* tek eleman seçiciler sadece bir elemanı ilgilendiren özelliktir */

// burda id'si head olan elemanı seçtik
console.log(document.getElementById("head"));
//burda seçtiğimiz elemanın class ismini aldık
console.log(document.getElementById("head").className);

//burda bu metodu baslik değişkeni içine aldık. böylelikle baslık dediğimzide bize bu metod gelecektir.
const baslik = document.getElementById("head")

//stil değiştirme

/* style ile seçtiğimiz elemanları özelleştirebiliriz. css'te olduğu gibi */

baslik.style.background = "red"
baslik.style.fontSize = "49px"
baslik.style.padding = "1rem"

//içerik değiştirme

/* içerik değiştirmek için ilk kullandığımız özellik textContent'dir */

baslik.textContent="Yeni Başlık"

//innerText textContent alternatifidir
baslik.innerText="Buda Yeni Başlık"

//burda içeriği konsola çağırdık
console.log(baslik.innerText);

//innerHTML ise alternatif olmakla birlikte içine girdiğimiz html taglerini algılamakta ve onu uygulamaktadır

baslik.innerText = "<i>Bu Yeni Başlık</i>" // bunu yazdığımızda i tagleri ekrana gelmektedir. halbuki biz bunları yazdırmak yerine çalıştırmayı isteriz

baslik.innerHTML = "<i>Bu Yeni Başlık</i>" //burda html tagleri başlığa uygulandı ve başlık italik oldu

// bir diğer eleman seçici : document.querySelector()

//burda h2 etiketini seçtik. sayfada birden fazla h2 veya aynı isimde class olsa bile ilk eleman seçilir
console.log(document.querySelector("h2"));
//burda ise head2 id'sine sahip elemanı seçtik
console.log(document.querySelector("#head2"));
// burda class'ı head-class2 olan elemanı seçtik
console.log(document.querySelector(".head-class2"));
//burda ise form içindeki input'u seçtik.
console.log(document.querySelector("form input"));

//burda li'nin son elemanını seçtik. bu şekilde pseudo ve class selectorları kullanabiliriz
document.querySelector("li:last-child").style.color="red"
