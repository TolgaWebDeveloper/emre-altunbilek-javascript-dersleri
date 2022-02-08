// verileri bir arada tutan yapılara array dizi denir

// let name1 = "tolga"
// let name2 = "abdullah"
// let name3 = "umut"// yerine

let names = ["tolga","umut","abdullah"]

console.log(names);
console.log("isimler :" + names);
console.log(names[0]); //burda dizimdeki ilk elemanı çağırdım
console.log(names[4]); //dizimde olmayan bir elemanı çağırdığım zaman undefined ifadesi gelir
//dizilere değer atama

names[3]="mehmet"// burda ise dizimin 3.elemanına yani boş olan kısmına mehmet adını ekledim. bu böyle böyle çoğaltılabilir

names[0] = "ahmet" //burda ise tanımlı olan ilk elemanımı değiştirdim

names[10] = "ayşe" //burda ifademin 10.kısmına değer atadım fakat benim değerlerim 3'e kadardı.burda 10.kısıma değer atar ve geriye kalan boş elemanlara empty yani boş değer atar ki buda dizilerde gereksiz yer kaplar

console.log(names);
/* not en büyük index numarası dizi sayısının 1 eksiğidir yani dizideki eleman sayısı 20 ise index numarası 19'dur.bu bilgiye göre en son elemana değer atayabiliriz */

//veya;
names[names.length] = "mahmut" //şeklinde en son ifadeye değer atayabiliriz

console.log(names);

// dizilerin döngülerle kullanımı

for (let i=0; i<names.length; i++){
    console.log(names[i]);
} //bu şekilde döngülerle dizi elemanlarının hepsini yazdırabiliyoruz 

console.log("************************");

//alternatif

for (let i of names){
    console.log(i);
} //bu şekilde index numarası ile uğraşmadan dizideki tüm değerleri döndürebiliriz