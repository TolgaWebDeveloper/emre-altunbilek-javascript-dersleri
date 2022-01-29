//console komutları

/* console komutları konsol ekranında yapılacak işlemleri konsola yazdırmamıza olanak sağlar */

console.log("konsol ekranı yazısı")//bu şekilde consola bir değer yazdırmış oluruz

console.error("bu bir hata mesajıdır")// bu şekilde konsola kırmızı bir hata mesajı verebiliriz

console.warn("bu bir uyarı mesajıdır")//bu şekilde konsola uyarı mesajı verebiliriz

console.clear()//bu değer ile konsolu temizleyebiliriz yani konsoldaki yazan herşeyi silebiliriz

// console ek özellikler /* bu kısım ileride lazım olabilir */

/* bu şeklide konsolda bir tablo görüntüsü oluşturabiliriz */
console.table({
    isim:"tolga",
    yaş:18
})

/* console time ile time end arasına yazılan değerlerin sürelerini görebiliriz */
console.time("id")
console.log("deneme")
console.log("deneme")
console.log("deneme")
console.log("deneme")
console.timeEnd("id")

console.clear()

//alert komutları

/* alert ise tarayıcı açıldığında ya da bir işlem yapıldığında ekrana gelen uyarı mesajıdır */

// alert("deneme") // bu şekilde ekrana deneme olarak bir uyarı gelir

//promt komutları

/* promt alert gibi bir işlem yapıldığında veya site açıldığında mesaj olarak ekrana gelir fakat tek farkı kullanıcıdan bir değer ister ve o girilen değeri tanımlamazsak uçup gider.tanımlarsak o değer elimize ulaşır ve konsola yazdırmak gibi çeşitli özellikler yapabiliriz */

// prompt("bir sayı giriniz")//bu kısımda girilen değerin elimize ulaşması için :

let alınanVeri = prompt("bir sayı giriniz")

console.log(alınanVeri)
