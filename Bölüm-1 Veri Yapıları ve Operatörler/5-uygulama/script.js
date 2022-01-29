/*Ödev 1
Bir  değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın
Örnek 1200 değeri için 20 dakika 0 saniye yazmalıdır.*/

// let saniyeString = prompt("lütfen bir saniye girin","100")
// let saniye = parseInt(saniyeString) 

// let dakika = parseInt(saniye / 60)
// let kalanSaniye = saniye % 60
 
// console.log(`Girdiğiniz ${saniye} değeri: ${dakika} dakika ${kalanSaniye} saniyedir `)

/* 
Ödev 2
Bir  değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklığı saklayın.
Sonrasında bu değerin kaç Celcius olduğunu hesaplayın.
100 değeri için 37.777778 gibi bir değer elde etmelisiniz.
Hesaplama formülü : celcius = 5/9 * (fahrenheit -32)*/

// let fahrenheitSıcaklık = parseInt(prompt("lütfen fahrenheit giriniz","100"))

// let celciusSıcaklık = 5/9 * (fahrenheitSıcaklık -32)

// console.log(`Girdiğiniz fahrenheit ${fahrenheitSıcaklık} sıcaklık ${celciusSıcaklık}'tır`)

/* 
Ödev 3
Bir yıl değerinin artık yıl olup olmadığını hesaplayın
Bir yılın artık olması için ya 400 ile modu 0 olmalı yada 4 ile modu 0 olmalı e 100 ile modu 0 olmamalı
4100 false değer vermeli.*/

let year = parseInt(prompt("bir yıl giriniz","2022"))

let artıkYılMı = parseInt(year % 400) == 0

console.log(`Girdiğiniz ${year} değeri artık yıl mı?: ${artıkYılMı}`)

/*
Çözümler video derste mevcuttur.
*/