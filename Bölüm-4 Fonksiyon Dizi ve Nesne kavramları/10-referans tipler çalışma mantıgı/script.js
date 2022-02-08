//primitive tipler 

/* primitive tiplerde bir değişkene tanımladığımız başka bir değişkeni değiştirdiğimizde yeni değişken değişmez. aşağıda isim değişkenini yeni isim değişkenine tanımladım ve sonra isim değişkenini değiştirdim fakat isim içeriği değişsede aynı içeriğe sahip olan değişken aynı kaldı. primitive tiplerde tanımlanan veri otomatik olarak güncellenmez ve eski değerinde kalır */

let isim = "tolga"
let yeniİsim = isim;
isim = "abdullah"
console.log(isim,yeniİsim);

let yas = 17

let yeniYas = yas;

yas= 18
console.log(yas,yeniYas);

//referance object tipler

/* reference tiplerde ise renkler değişkenine mavi değerini ekledim ve bu değişkene eşit oan yeniRenkler değişkenide güncellendi */ 

let renkler = ["yeşil","sarı"];

let yeniRenkler = renkler;

renkler.push("mavi")

console.log(renkler,yeniRenkler);
