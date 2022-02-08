//global scope

/* global scope tüm sayfa ve kodlar tarafından bilinen değişkenlerdir yani en dışta olan değişkenlerdir*/

let isim = "tolga" //burda yani sayfayı kapsayan bir değişken tanımladık 

console.log(isim);

function isimyaz(){
    console.log(isim);
}

isimyaz()

// alert(isim)

 /* gibi birçok yerde bu değişkeni tanımladık ve hepsi aynı sonucu verdi */

 //local scope

 let name = "tolga"

 function isimyazdır(){
     let name = "yalçın" /* gördüğümüz gibi buraya aynı değişkeni let ile farklı bir değerle tanımladım fakat bana uyarı vermedi çünkü bu değişken sadece bu fonksiyonda kullanılacak */
     console.log(name);
 }

 isimyazdır() /* buraya fonksiyon içindeki name değişkeni geldi */

 console.log(name);// buraya ise benim ilk tanımladığım tolga değeri geldi çünkü fonksiyon içine let ile tanımladığım değişken burayı etkilemez 

 // şöyle bir kullanım olsaydı

 function isimyazdır(){
    name = "yalçın" // bu şekilde yaptığımda yukarıdaki tanımladığım değer güncellendi çünkü let'i görmeyince değişkeni güncellediğimi sandı 
    console.log(name);
}


/* özetleyecek olursak süslü parantez içindeki değişkenler orda yaşayıp orda ölürler yani local alanın dışına çıkmazlar ve bunlar local değişkenlerdir, inline değişken olarak düşünülebilir */

/* süslü parantez dışındakiler ise yani kodların en dışındakiler global değişkenlerdir. lazım olunan tüm alanlarda kullanılabilirler. internal değişken olarak düşünülebilirler */
