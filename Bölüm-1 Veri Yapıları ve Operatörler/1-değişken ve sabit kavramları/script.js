//var let ve const ile değişken tanımlanabilir

//her işlemin sonunda noktalı vilgül koymak isteğe bağlıdır.konulmadığı takdirde de kabul edilir

let yasim = 18; // bu şekilde değiştirilebilir bir değişken tanımlarız

console.log(yasim); //burda verdiğimiz değişken ekrana gelir. değişkenin en güzel avantajı birden fazla değer girdiğimizde hepsinin güncellenmesi icap ederse değiştirmemize yarar


//değişken isimleri belli bir kurala göre tanımlanır

/* 1- değikenler sayı ile başlayamaz */

/*let 1sayı yerine */ let sayı1 /* kullanılır */

/* 2- değişkenlerde "_" ile "$" dışında sembol kullanılamaz */

let _sayı1 = 123456678;

/* tercihen değişkenin ilk kelimesindeki ilk harfi küçük diğer kelimelerde ilk harf büyük olur */

let benimDogumYılım = 2003;

let benim_dogum_yılım = 2003;

let benim_dogumYılım = 2003;


// const ile tanımladığımız değer ileride güncellenemez

const piSayısı = 3.15

// piSayısı = 3.14 olamaz çünkü değer değiştirilemez ve hata verir