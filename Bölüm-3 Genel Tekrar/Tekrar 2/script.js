// soru 4 : kendi adınızı 5 kere yazdıran uygulamayı tüm döngülerle yapınız

let name = "tolga"

for (let i = 0; i<5; i++){
    console.log(name);
}

let i = 0;
while (i<5) {
    console.log(name);
    i++
}

let k = 0;
do{
    console.log(name)
    k++
}while(k<5);

// soru 5 : 1'den 100'e kadar olan sayıların toplamını yazınız

let toplam = 0
for (let i = 0; i<100; i++){
    
    toplam += i
}

console.log("sayıların toplamı" + toplam);

// soru 6 : 1'den 10'a kadar olan sayıları sıra ile ve aralarında virgül olacak şekilde yazan bir uygulamayı for döngüsü ile yazınız

let yazdırılacakMetin = "";

for(i = 0; i<=10; i++){
    if (i != 10) {
        yazdırılacakMetin = yazdırılacakMetin + i + ","
    }
    else{
        yazdırılacakMetin = yazdırılacakMetin + i
    }
}

console.log(yazdırılacakMetin);

// soru 7 : klavyeden girilen bir sayının faktoriyelini veriniz

let alinanSayi = parseInt(prompt("bir sayı giriniz"))

let faktoriyel = 1;
for (let i = 1; i<= alinanSayi; i++){
    faktoriyel = faktoriyel * i
}

alert(`girdiğiniz ${alinanSayi} sayısının faktoriyeli: ${faktoriyel}`)
