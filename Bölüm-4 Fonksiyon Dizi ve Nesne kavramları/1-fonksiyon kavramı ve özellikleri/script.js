// fonksiyon kavramı 

/* fonksiyon bir kodu birden fazla kullanacağımız zaman işimize yaramaktadır. burda bir fonksiyon tanımlarız ve fonksiyonun içine bir görev atarız örneğin konsola merhaba yazdırması için selamver diye komut atarız ve her çağırdığımızda konsola merhaba yazar veya fonksişyon içine girilen değerleri topla veya çıkar deriz böylece her toplama işlemi yapacağımızda bu bu fonksiyon ile farklı sayıları toplayabiliriz */

function selamVer(){
    console.log("merhaba. bu kodu her selamVer fonksiyonu çağırıldığında yazdıracağım");
} // şuan ekrana birşey gelmedi çünkü selamVer fonksiyonunu çağırmadık 

selamVer();//şuan konsola fonksiyonumuz geldi. burda parantez içi boş çünkü bu değer almayan bir fonksiyon

/* değer alan fonksiyon */

/* burda değer alan fonksiyonu gördük. yani burda bir fonksiyon ismi verdik ve fonksiyona iki parametre verdik. sonra konsola sayıların toplamı yazıp a ile b'nin toplamını vermesini söyledik. burda sayıları göndermemizi sağlayan özellik ise return. return sonucu fonksiyona gönderir ve fonksiyona parametre atadığımızda ekrana fonksiyonun sonucu gelir. yani return ile verilen değerleri alıp ona göre işlem yapabiliriz */

function sayıTopla(a,b){
    console.log("sayıların toplamı :" + (a+b));
    return a+b;
    // burda return'dan sonra yazdığımız kod çalışmayacaktır çünkü return fonksiyonun bitirilmesini de sağlar 
}

sayıTopla(10,20);
/* fonksiyonların türü içerisindeki değer ne olursa olsun function olarak geçer */
console.log(typeof sayıTopla);

// fonksiyonların en güzel yanı parametreler sürekli değişebilir örneğin;
sayıTopla(20,40)
sayıTopla(60,80) /* gibi gibi ileride verileri güncelleyebiliriz */

//bir örnek yapalım

function belliAralıktakiSayılarıTopla(baslangicSayisi,bitisSayisi){
    let toplam = 0;
    for(let i=baslangicSayisi; i<bitisSayisi; i++){
        toplam = toplam + i
    }

    console.log("toplam :" +toplam);
    return toplam;
}

belliAralıktakiSayılarıTopla(10,20) // bu şekilde artık iki sayının arasındaki sayıları toplayan bir fonksiyonum yani özelliğim var. 
