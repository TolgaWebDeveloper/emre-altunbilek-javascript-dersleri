//for loop

/* döngüler bize bir değişkeni birden fazla tekrarlayarak yazmamızı sağlar. örneğin bir koşulda sürekli else if kullanarak veya yazdıracağımız kodu birden fazla kopyala yapıştır yaparız fakat bu hem kalabalığa neden olur hemde uzun süren bir işlemdir*/

// loop syntax : for(ilk atama; döngü çalıştırma şartı; her çalışma sonrası ne olacak)

//döngüleri kullanmazsak;

// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga")
// console.log("benim adım tolga") bu şekilde kötü bir görüntü olur

//döngüler ile;

/* burda for'a ilk başta bir sayı atadık. sonra o değişkenin 9'dan küçük olmasını istedik ve sonda ise her döngü olduğunda değişkeni bir arttırmasını istedik. böylelikle sayı her döngüde arttı ve i değeri 9'a yakın olunca durdu. bizde her arttığında bize içindeki değeri döndürmesini istedik ve değer her arttıkça kod bloğu çalıştı */

for (i = 0; i < 9; i++) {
    console.log("benim adım tolga")
} /* bu şekilde kodumuz 9 kere tekrarlanarak ekrana gelir. tek bir satır olduğu için konsolda yanına 9 konularak gösterildi */

/* burda ise for'a atadğımız değişkenin 0 dan büyük olmasını söyledik her döngüde i değerini azaltmasını istedik ve sayı 0'a kadar azalınca döngü durdu ve her döngüde ekrana yazıldı */

for (i = 10; i > 0; i--) {
    console.log("sayının değeri: " +i)
} /* burda ise sayı azalarak bir döngü oluştu. değer her döngüde farklı bir i değişkeni aldığı için konsola 10 kere geldi */ 

// farklı bir kullanım yapalım

/* bu şekilde i farklı değişkene değer atadık, iki değişkenin toplamının 60'tan küçük olmasını söyledik ve her döngüde i'yi 5 arttırmasını, j'yi 10 arttırmasını söyledik.böylece içerideki değer 4 kere yani toplamı 45 olunca'ya kadar döndü çünkü 602tan küçük olmasını istediğimiz için bir sonraki döngü 60 olacaktı o yüzden döngüden çıktı */

for (i = 0, j = 0;(i+j) < 60; i += 5 , j += 10) {
    console.log("i değeri: " +i , "j değeri: " +j)
}