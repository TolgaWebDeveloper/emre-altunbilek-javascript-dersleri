/* soru 8 : Aşağıda tanımı verilen f(x,y) fonksiyonunu klavyeden girilen x ve y değerleri için hesaplayınız.
x>0, y<0 ise f(x,y) = 4x+2y+4
x>0, y=0 ise f(x,y) = 2x-y+3
x<0, y>0 ise f(x,y) = 3x+4y+3 */

// let xDegeri = parseInt(prompt("x değeri giriniz"))
// let yDegeri = parseInt(prompt("y değeri giriniz"))

// let islemSonucu = 0

// if(xDegeri > 0 && yDegeri < 0){
//     islemSonucu = 4*xDegeri + 2*yDegeri +4
// }
// else if(xDegeri > 0 && yDegeri == 0){
//     islemSonucu = 2*xDegeri - yDegeri + 3
// }
// else if(xDegeri < 0 && yDegeri > 0){
//     islemSonucu = 3*xDegeri + 4*yDegeri +3
// }

// alert(`x :${xDegeri} , y :${yDegeri}, işlem sonucu :${islemSonucu}`)

//Soru 9:  100lük sistemde verilen notları harfli sistemde gösteren bir uygulama yazınız.

// let yuzlukSistemdekiNot = parseInt(prompt("Notunuzu giriniz"))
// let notSınırı = parseInt(yuzlukSistemdekiNot / 10)
// console.log(`yüzlük sistemdeki notunuz: ${yuzlukSistemdekiNot}, not sınırınız: ${notSınırı}`);

// if(yuzlukSistemdekiNot === 100){
//     notSınırı = 9
// }

// switch(notSınırı){
//     case 9 : console.log("Notunuz AA"); break;
//     case 8 : console.log("Notunuz BA"); break;
//     case 7 : console.log("Notunuz BB"); break;
//     case 6 : console.log("Notunuz CB"); break;
//     case 5 : console.log("Notunuz CC"); break;
//     default : console.log("Notunuz CC'den düşük");
// }


//Soru 10: Çarpım tablosunu oluşturan bir uygulama yazınız.

// let alınanSayı = parseInt(prompt("Çarpılacak sayıyı veriniz","6"))

// let sonuc = 0
// for (i = 1, j = alınanSayı; i<=10; i++){
//     console.log(`${j} * ${i} = ${j * i}`);
// }
