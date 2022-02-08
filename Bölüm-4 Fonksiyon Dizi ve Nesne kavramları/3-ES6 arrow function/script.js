// bildiğimiz fonksiyon kullanımı

function selamVer() {
    console.log("merhaba");
}

selamVer()

//alternatif fonksiyon kullanımı 

/* burda const'a bir değişken atadık ve değişkene function değeri vererek onun fonksiyon olmasını sağladık */ 
const selamVerDegisken = function (){
    console.log("alternatif fonksiyon kullanımı ile merhaba");
}

selamVerDegisken()

//ES6 Fat Arrow kullanımı

/* fat arrow es6 ile js'ye eklenmiş bir fonksiyon atama yöntemidir. ismini => karakterinden yani bir ok şeklinde olmasından almıştır. bu şekilde fonksiyon olduğunu belirtmeden fonksiyon yazabiliriz*/
const fatArrowDegisken = () => {
    console.log("fat arrow ile merhaba");
}

fatArrowDegisken()

/* değer almayan bir değişkene fonksiyon veriyorsak () işareti koymadan fonksiyon atayabiliriz */

const fatArrowDegisken1 = _ =>{
    console.log("farklı bir fat arrow kullanımı ile merhaba");
}

fatArrowDegisken1()

/* değer alan bir değişkeni nasıl fat arrow ile tanımlarız */

const fatArrowKaresiniAl = (sayi) =>{
    return sayi * sayi;
}

console.log(fatArrowKaresiniAl(5));

/* eğer değer alan değişken tek satırlıysa return kullanmadan fat arrow ile tanımlayabiliriz */

/* not: burda süslü parantez kullanılmaz */

const fatArrowParametreKısa = (sayı) => sayı * sayı;

console.log(fatArrowParametreKısa(3));
