//dom elementleri üzerinde gezinme

let deger;

const myListe = document.querySelector("ul.liste")

//childNodes bize seçtiğimiz elemanı node'larıyla birlikte dizi halinde verir.bu listede her alt satır text olarak adlandırılır ve onlarda dizinin elemanı sayılır
deger = myListe.childNodes
deger = myListe.childNodes[1].nodeName // burda seçtiğimiz elemanın node ismini sorduk ve seçtiğimiz li elementi olduğu için li döndü
deger = myListe.childNodes[1].nodeType /* burda seçtiğimiz elemanın node tipini sorduk ve number bir değer döndü. bunların anlamı:

1:element 
2:attribute
3:text
8:yorum satırı */

//childiren ile de aynı işlemi yapmış oluruz. tek farkı bize sadece elementleri verir
deger = myListe.children

deger = myListe.firstChild //burda bize ilk elemanı verir.eleman bir node'de olabilir
deger = myListe.firstElementChild //burda bize ilk elementi verir.

deger = myListe.lastChild //burda son elemanı verir 
deger = myListe.lastElementChild //burda son elementi verir

deger = myListe.childElementCount //burda kaç tane element olduğunu verir

//parent element

//parent node ve parent element bize kapsayıcı elemanı verir. örneğin burda kapsayıcı eleman body geldi ama bu eleman bir container içinde olsaydı container gelirdi
deger = myListe.parentNode
deger = myListe.parentElement

//burda ise parent elemanın parentini aldık. bu şekilde en kapsayıcı eleman olan html'ye kadar devam eder
deger = myListe.parentElement.parentElement

//nextSibling ve nextElementSibling

//nextSibling bize seçtiğimiz elemandan sonraki elemanı verir.burda ilk elemandan bir sonraki elemanı seçtik
deger = myListe.childNodes[0].nextSibling
//nextElementSibling bize seçtiğimiz elementten bir sonraki elemente geçer. yani arada node olsa bile görmezden gelip diğer elemente geçer
deger = myListe.childNodes[1].nextElementSibling

//previousSibling ve previousElementSibling

//previousSibling bize bir önceki elemanı verir.
deger = myListe.childNodes[1].previousSibling
deger = myListe.childNodes[1].previousElementSibling
console.log(deger);