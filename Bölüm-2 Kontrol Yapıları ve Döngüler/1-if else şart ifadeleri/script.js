// if koşul ifadesi 

/* if bir değer ya da değişken true olduğunda ona göre koşul atamamızı sağlar */

let benimYasim = 18
let onunYasi = 25

/* burda benim yaşımın onunkinden küçük olup olmadığını sordum ve cevap doğru geldiğinde ise o benden büyük yazısını yazdırmasını istedim */
if (benimYasim > onunYasi) {
    console.log("o benden büyük");
}

/* else if birden fazla koşul atamak için kullanılır */
else if (onunYasi === benimYasim){
    console.log("onunla yaşıtız")
} /* bu durumda ise yaşlarımızın eşit olduğu durumda onunla yaşıtız ifadesi gelir */

/* else ise sonuç false geldiğinde yani if'deki değer karşılanmadığında bana girdiğim değeri verir */
else{
    console.log("ben ondan büyüğüm")
} /* burda cevap olumsuz yani yanlış olursa bu değeri döndürmesini istedim */

/* burda ise iç içe koşul kullandık yani iki koşulda doğruysa if çalışır ama koşullardan birisi ya da ikisi yanlışsa false çalışır */
let sayi1 = 10, sayi2 = 20;
if (sayi1 > sayi2) {

    if (sayi1 > 20)
        console.log("Sayı1 hem sayi 2den hem de 20den büyük");
}

else {
    console.log("Else çalıştır");

}

let asalSayiMi = true;
// if (asalSayiMi == true) {

// } yerine ;

// bu şekilde yazabiliriz ki asalSayiMi değeri true olduğu için o zaten true olarak sayılacaktır. yani true olarak belirtmemize gerek yok
if (asalSayiMi) { }

let a = 5, b = 15, c = 0;

if (a > b) {
    c = a + b;
} else { 
    c = a - b;
}
console.log("c değeri:" + c);

