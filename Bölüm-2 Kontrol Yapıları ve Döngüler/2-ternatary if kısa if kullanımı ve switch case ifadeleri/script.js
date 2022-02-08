//ternary kısa if operatör

/* ternary operatör ise tek satır üzerinde if ve else işlevi görür. */

let a = 5, b = 15, c = 0;

// ? işareti if'i temsil eder. yani cevap true ise ? deki değer gelir. : işareti ise else yi temsil eder. gereken yerlerde kullanılabilir 

c = (a > b) ? (a + b) : (a - b);
console.log("c nin yeni değeri:"+c);

//switch koşul ifadesi 

/* switch birden fazla koşul tanımlayacağımız zaman yani "if, else if, else if ..., else" kullanımı yerine daha temiz ve okunur kod yazmak amacıyla kullanılır */

//switch kullanmadan :

let haftaninKacinciGunu = 3;

if (haftaninKacinciGunu === 1) {
    console.log("Pazartesi");
} else if (haftaninKacinciGunu === 2) { 
    console.log("Salı");
} else if (haftaninKacinciGunu === 3)
    console.log("Çarşamba");
else {
    console.log("Pazar");
}

//switch kullanınca :

switch (haftaninKacinciGunu /* burda takip edilecek değeri yani durum değerini girdim */) {
    /* case ile farklı koşullar atadım ve doğru olanı konsola yazdırmasını söyledim. yani case bize if görevini gördü */

    /* break ise koşul gerçekleştiğinde durmasını ve diğer koşulu görmemesini sağlar. break konulmadığı anda gerçekleşen koşulun altındakilei de o koşulun elemanı zanneder ve break görene kadar yazmaya devam eder */
    case 1:
        console.log("pazartesi");
    break;
    
    case 2:
        console.log("salı");
    break;
    
    case 3:
        console.log("çarşamba")
    break;
    
    case 4:
        console.log("perşembe")
    break;

    case 5:
        console.log("cuma")
    break;

    case 6:
        console.log("cumartesi")
    break;

    case 7:
        console.log("pazar")
    break;    

    /* default ise else görevi görür. hiçbir koşul gerçekleşmediğinde burdaki değer yazılır */
    default:
        console.log("geçersiz gün");
}