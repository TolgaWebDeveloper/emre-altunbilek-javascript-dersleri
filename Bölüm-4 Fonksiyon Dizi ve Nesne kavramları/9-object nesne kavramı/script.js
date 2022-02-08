// object kullanımı

/* object örneğin bir kişinin veya bir arabanın model yılı, yaşı vs.. bilgileri almamız gerektiğinde tek tek değişken tanımlamak yerini hepsini tek bir değişken içinde toplayabiliriz */

// let isim = "tolga"
// let soyisim = "yalçın"
// let yaş = 18 yerine;

let tolga = {

    isim: "tolga",
    soyisim: "yalçın",
    dogumYili: 2003,
    evliMi: false,
    // obje içine fonksiyon dahi atayabiliriz

    //dogumyılı olarak bir değer atadık ama obje içinde doğum yılı varsa biz burdaki doğumyılını belirtebiliriz. bunun için this kullanırız 
    // yasHesapla: function(dogumYili){
    //     return new Date().getFullYear() - dogumYili
    // }

    // bu şekilde obje içindeki dogumYılı buraya tanımlandı ve bir değer vermeden veya return kullanmadan yasımız içerdeki yas değerine eklenerek ekrana gelmesini sağladım
    yasHesapla: function (){
        this.yas = new Date().getFullYear() - this.dogumYili
    }

} //şeklinde kullanım object kullanımdır


console.log(tolga);

//elemanlara tek tek erişmek istersek

console.log(tolga.soyisim); //veya
console.log(tolga["soyisim"]); //şeklinde elemanı seçebiliyoruz yanlız alttaki örnekte çağırılacak değerin string bir şekilde yazılması lazım yani soyisim kısmını "" işaretleri içine almamız şart

tolga.yasHesapla();
console.log(tolga.yas);

let abdullah = {

    isim: "abdullah",
    soyisim: "balcan",
    dogumYili: 2003,
    evliMi: false,
    // obje içine fonksiyon dahi atayabiliriz

    //dogumyılı olarak bir değer atadık ama obje içinde doğum yılı varsa biz burdaki doğumyılını belirtebiliriz. bunun için this kullanırız 
    // yasHesapla: function(dogumYili){
    //     return new Date().getFullYear() - dogumYili
    // }

    // bu şekilde obje içindeki dogumYılı buraya tanımlandı ve bir değer vermeden veya return kullanmadan yasımız içerdeki yas değerine eklenerek ekrana gelmesini sağladım
    yasHesapla: function (){
        this.yas = new Date().getFullYear() - this.dogumYili
    }

}

console.log(abdullah);

//bu bilgilerin hepsini bir diziye atabiliriz

let kullanıcılar = [tolga,abdullah]

console.log(kullanıcılar);

// alternatif object tanımlama

let umut = new Object();
umut.adi = "Umut";
umut.dogumYili = 2004;

console.log(umut); //şeklinde tanımlanabilir fakat okunuş ve kullanış açısından pek önerilmez