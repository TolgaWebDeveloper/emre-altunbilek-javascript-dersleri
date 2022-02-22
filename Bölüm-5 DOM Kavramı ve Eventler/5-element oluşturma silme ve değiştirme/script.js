//element ekleme

//createElement yeni element oluşturur. burda bir li elementi oluşturduk
const yeniListeElemanı = document.createElement("li")

yeniListeElemanı.className="list-item" //className'ye bir değer vererek yeni bir class oluşturduk
yeniListeElemanı.textContent="Yozgat" //li elemanına yeni bir değer veya içerik girdik
yeniListeElemanı.id="yeni-id" //li elemanına yeni bir id ekledik
yeniListeElemanı.setAttribute("deger","yeni-deger") //burda elemana yeni bir attribute ve value ekledik. baştaki attribute ismi, diğeri attribute değeri

//li'yi ul'ye ekleme

//appendChild sonuncu çocuk anlamına gelmektedir. burda ul nesnesinin sonuna oluşturduğumuz liste elemanını ekledik
document.querySelector("ul").appendChild(yeniListeElemanı) 

console.log(yeniListeElemanı);

//replace (değiştirme)

const yeniKucukBaslik = document.createElement("h6")
const eskiBaslik = document.querySelector("h2")
yeniKucukBaslik.id="h6-id"
yeniKucukBaslik.textContent="Alt başlık"

const baslikParent = document.querySelector("body")

baslikParent.replaceChild(yeniKucukBaslik,eskiBaslik)

//remove (silme)

const listİtem = document.querySelector("li:last-child")

//remove silme işlemi uygular
listİtem.remove()

// document.querySelector("ul").remove() bu şekilde tüm liste silinir

// removeChild seçilen elemanı siler. burda ul listesi içinden 1.indexteki yani 2.elemanı seçip silmesini istedik
document.querySelector("ul").removeChild(document.querySelectorAll("li")[1]) 

console.log(listİtem);
