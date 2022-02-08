let deger;

// document bir window elemanı olmasının yanı sıra html'e erişip çağırıp düzenleyebiliyoruz.
deger = window.document
// all metodu ile html'deki etiketler dizi halinde gelir
deger = document.all
// length ile html'deki karakterlerin sayısını alırız
// deger = document.all.length
// burda ise html'deki 6.sıradaki etiketi çağırdık. tabi bunu element seçiciler ile yapmak daha kolay olacaktır
// deger = document.all[6]

// eğer document içindeki her bir elemanı yazdırmak için forEach kavramını kullanabiliriz. fakat bunun için document'deki elemanları dizi haline getirmemiz lazım çünkü forEach for döngüsünün diziler üzerinde kullanılan basit halidir

// let dizi = Array.from(deger) // bu şekilde bir değeri diziye çevirebiliriz

// dizi.forEach(item => {
//     console.log(item);
// });

//burda html'in head kısmını çağırdık
deger = document.head
//burda html'in body kısmını çağırdık
deger = document.body
//burda sayfanın domain'ini çağırdık
deger = document.domain
//burda sayfanın url'sini çağırdık
deger = document.URL
//burda dökümanın tipini çağırdık
deger = document.contentType

//burda html içindeki formları çağırdık
deger = document.forms
//burda ilk form elemanını çağırdık
deger = document.forms[0]
//burda ilk elemanın sadece id bilgisini aldık
deger = document.forms[0].id
//burda html içindeki linkleri çağırdık
deger = document.links
//burda ilk link elemanının sadece class bilgisini aldık
deger = document.links[0].className
//burda ilk elemanın class bilgisini dizi şeklinde aldık
deger = document.links[0].classList

//burda html içindeki resimleri çağırdık 
deger = document.images
//burda html içindeki src attribute'ine sahip ilk resmi çağırdık
deger = document.images[0].getAttribute("src")
console.log(deger);